import { ethers } from "ethers";

import { envServer } from "./_server";
import prisma from "./db";
import { UnitagsAddressesResponse } from "./types";

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const UNISWAP_BATCH_SIZE = 40; // Uniswap's limit

const provider = new ethers.JsonRpcProvider(envServer.RPC_URL);

const UNITAGS_ADDRESS_ENDPOINT = "https://interface.gateway.uniswap.org/v2/unitags/addresses";

async function fetchUniswapIdentitiesBulk(addresses: string[]) {
  try {
    const response = await fetch(`${UNITAGS_ADDRESS_ENDPOINT}?addresses=${addresses.join(",")}`);

    if (!response.ok) {
      throw new Error(`Uniswap API error: ${response.status}`);
    }

    const data = (await response.json()) as UnitagsAddressesResponse;
    return data.usernames;
  } catch (error) {
    console.error("Error fetching Uniswap identities:", error);
    return {};
  }
}

async function fetchEnsBulk(addresses: string[]) {
  try {
    // TODO: Using multicall would be even better here
    const promises = addresses.map(address => provider.lookupAddress(address));
    const pfpPromises = addresses.map(address => provider.getAvatar(address));
    const [names, pfps] = await Promise.all([Promise.all(promises), Promise.all(pfpPromises)]);

    return addresses.reduce(
      (acc, address, index) => {
        acc[address] = {
          name: names[index] || null,
          pfp: pfps[index] || null
        };
        return acc;
      },
      {} as { [key: string]: { name: string | null; pfp: string | null } }
    );
  } catch (error) {
    console.error("Error fetching ENS names:", error);
    return {};
  }
}

async function processIdentityBatch(addresses: string[]) {
  // Fetch both ENS and Uniswap data in parallel
  const [ensNames, uniswapData] = await Promise.all([
    fetchEnsBulk(addresses),
    fetchUniswapIdentitiesBulk(addresses)
  ]);

  const now = new Date();
  const identities = addresses.map(address => {
    return {
      address,
      ens: ensNames[address]?.name || null,
      ensPfp: ensNames[address]?.pfp || null,
      uniswapUsername: uniswapData[address]?.username
        ? uniswapData[address].username + ".uni.eth"
        : null,
      uniswapPfp: uniswapData[address]?.metadata?.avatar || null,
      lastUpdated: now
    };
  });

  // Bulk upsert identities
  await prisma.$transaction(
    identities.map(identity =>
      prisma.addressIdentity.upsert({
        where: { address: identity.address },
        create: identity,
        update: identity
      })
    )
  );

  return identities;
}

async function updateIdentitiesInBatches(addresses: string[]) {
  console.log(`Updating ${addresses.length} identities`);

  // Process in batches of 40 (Uniswap's limit)
  for (let i = 0; i < addresses.length; i += UNISWAP_BATCH_SIZE) {
    const batch = addresses.slice(i, i + UNISWAP_BATCH_SIZE);
    await processIdentityBatch(batch);

    // Add a small delay between batches
    if (i + UNISWAP_BATCH_SIZE < addresses.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
}

export async function getAddressIdentities(addresses: string[]) {
  const uniqueAddresses = [...new Set(addresses.map(a => a))];

  // Get existing identities from cache
  const cachedIdentities = await prisma.addressIdentity.findMany({
    where: {
      address: { in: uniqueAddresses }
    }
  });

  // Find addresses that need updating
  const now = new Date();
  const addressesToUpdate = [
    // Addresses not in cache
    ...uniqueAddresses.filter(addr => !cachedIdentities.find(ci => ci.address === addr)),
    // Cached addresses that are too old
    ...cachedIdentities
      .filter(ci => now.getTime() - ci.lastUpdated.getTime() > CACHE_DURATION)
      .map(ci => ci.address)
  ];

  // Update outdated identities in the background
  if (addressesToUpdate.length > 0) {
    updateIdentitiesInBatches(addressesToUpdate).catch(console.error);
  }

  // Return cached results, including stale ones
  const identityMap = new Map(
    cachedIdentities.map(identity => [
      identity.address,
      {
        address: identity.address,
        ens: identity.ens || undefined,
        ensPfp: identity.ensPfp || undefined,
        uniswapUsername: identity.uniswapUsername || undefined,
        uniswapPfp: identity.uniswapPfp || undefined
      }
    ])
  );

  // Add placeholder entries for addresses not in cache
  uniqueAddresses.forEach(address => {
    if (!identityMap.has(address)) {
      identityMap.set(address, {
        address,
        ens: undefined,
        ensPfp: undefined,
        uniswapUsername: undefined,
        uniswapPfp: undefined
      });
    }
  });

  return identityMap;
}
