import prisma from "@/lib/db";
import { ethers } from "ethers";

import { envServer } from "./_server";

const BLOCKS_PER_BATCH = 2000; // Adjust based on your RPC provider's limits

export async function syncEvents() {
  const provider = new ethers.JsonRpcProvider(envServer.RPC_URL);

  try {
    // Get the last synced block from database
    const syncState = await prisma.syncState.findUnique({
      where: { id: "current" }
    });

    const currentBlock = await provider.getBlockNumber();
    const startBlock = syncState ? Number(syncState.lastBlock) + 1 : 21144577;

    // Don't proceed if we're already up to date
    if (startBlock > currentBlock) {
      console.log("Already up to date");
      return;
    }

    const iface = new ethers.Interface([
      "event NewAddressFound(address bestAddress, address minter, uint256 score)"
    ]);

    // Process blocks in batches
    for (let fromBlock = startBlock; fromBlock <= currentBlock; fromBlock += BLOCKS_PER_BATCH) {
      const toBlock = Math.min(fromBlock + BLOCKS_PER_BATCH - 1, currentBlock);

      console.log(`Processing blocks ${fromBlock} to ${toBlock}`);

      const logs = await provider.getLogs({
        address: envServer.CONTRACT_ADDRESS,
        topics: [iface.getEvent("NewAddressFound")!.topicHash],
        fromBlock: BigInt(fromBlock),
        toBlock: BigInt(toBlock)
      });

      if (logs.length > 0) {
        // Process events in transaction
        await prisma.$transaction(async tx => {
          // Add new events
          for (const log of logs) {
            const parsedLog = iface.parseLog(log)!;
            await tx.event.create({
              data: {
                bestAddress: parsedLog.args.bestAddress,
                minter: parsedLog.args.minter,
                score: BigInt(parsedLog.args.score.toString()),
                blockNumber: BigInt(log.blockNumber),
                transactionHash: log.transactionHash
              }
            });
          }

          // Update sync state
          await tx.syncState.upsert({
            where: { id: "current" },
            create: {
              id: "current",
              lastBlock: BigInt(toBlock),
              lastSyncTime: new Date()
            },
            update: {
              lastBlock: BigInt(toBlock),
              lastSyncTime: new Date()
            }
          });
        });
      } else {
        // Even if no events, update the sync state
        await prisma.syncState.upsert({
          where: { id: "current" },
          create: {
            id: "current",
            lastBlock: BigInt(toBlock),
            lastSyncTime: new Date()
          },
          update: {
            lastBlock: BigInt(toBlock),
            lastSyncTime: new Date()
          }
        });
      }
    }

    return { success: true, lastBlock: currentBlock };
  } catch (error) {
    console.error("Sync error:", error);
    throw error;
  }
}
