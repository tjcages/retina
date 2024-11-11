import { cache } from "react";

import { getAddressIdentities } from "./address-identity";
import { calculateBadges } from "./badge";
import { computeAddressScore } from "./compute-score";
import prisma from "./db";
import { LeaderboardEntry } from "./types";

export const computeLeaderboard = cache(async (): Promise<LeaderboardEntry[]> => {
  // First get the highest score for each address
  const subquery = prisma.event.groupBy({
    by: ["bestAddress"],
    _max: {
      score: true
    }
  });

  // Then get the full event details including minter for those max scores
  const results = await prisma.event.findMany({
    where: {
      OR: (await subquery).map(item => ({
        AND: {
          bestAddress: item.bestAddress
        }
      }))
    },
    orderBy: [
      { score: "desc" },
      { blockNumber: "asc" } // Earlier blocks (lower numbers) rank higher
    ],
    take: 100
  });

  const addressIdentities = await getAddressIdentities(results.map(entry => entry.minter));

  const badgeState = await prisma.badgeState.findUnique({ where: { id: "current" } });

  const { addressToBadges, maxConsecutive4s, maxLeadingZeros, maxTotalFours } = calculateBadges(
    results.map(entry => entry.bestAddress),
    {
      currentMaxConsecutive4s: badgeState?.maxConsecutive4s ?? 0,
      currentMaxLeadingZeros: badgeState?.maxLeadingZeros ?? 0,
      currentMaxTotalFours: badgeState?.maxTotalFours ?? 0
    }
  );

  if (
    maxConsecutive4s > (badgeState?.maxConsecutive4s ?? 0) ||
    maxLeadingZeros > (badgeState?.maxLeadingZeros ?? 0) ||
    maxTotalFours > (badgeState?.maxTotalFours ?? 0)
  ) {
    await prisma.badgeState.update({
      where: { id: "current" },
      data: { maxConsecutive4s, maxLeadingZeros, maxTotalFours }
    });
  }

  return results.map((entry, index) => {
    const badges = addressToBadges[entry.bestAddress];
    const identity = addressIdentities.get(entry.minter);
    const scoreBreakdown = computeAddressScore(entry.bestAddress);

    return {
      rank: index + 1,
      v4Address: entry.bestAddress,
      minterAddress: entry.minter,
      score: Number(entry.score),
      avatarSrc: identity?.uniswapPfp ?? identity?.ensPfp ?? undefined,
      username: identity?.uniswapUsername ?? identity?.ens ?? undefined,
      badges: badges ?? [],
      scoreBreakdown: {
        leadingZeroNibbles: scoreBreakdown.leadingZeros.score,
        firstFourIsFollowedByThreeFours: scoreBreakdown.leadingFours.score,
        lastFourNibblesAreFours: scoreBreakdown.trailingFours.score,
        numberOfFours: scoreBreakdown.additionalFours.score
      }
    } satisfies LeaderboardEntry;
  });
});
