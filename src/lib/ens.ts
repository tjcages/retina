import { ethers } from "ethers";

import { envServer } from "./_server";

export async function getENSFromAddresses(addresses: string[]) {
  const provider = new ethers.JsonRpcProvider(envServer.RPC_URL);

  const validAddresses = addresses.filter(addr => ethers.isAddress(addr));
  if (validAddresses.length !== addresses.length) {
    throw new Error("Some addresses are not valid Ethereum addresses");
  }

  const batchSize = 20;
  const batches = [];
  for (let i = 0; i < addresses.length; i += batchSize) {
    batches.push(addresses.slice(i, i + batchSize));
  }

  const results = [];

  // Process each batch
  for (const batch of batches) {
    const batchPromises = batch.map(async address => {
      try {
        const ensName = await provider.lookupAddress(address);
        return {
          address: address,
          ensName: ensName || null
        };
      } catch (error) {
        return {
          address: address,
          ensName: null,
          error: error instanceof Error ? error.message : "Unknown error"
        };
      }
    });

    // Wait for batch to complete
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);

    // Add delay between batches
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  // Filter out addresses without ENS names if needed
  // const withENSOnly = results.filter(result => result.ensName !== null);

  return results;
}
