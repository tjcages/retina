import { cache } from "react";

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

  return results.map((entry, index) => ({
    rank: index + 1,
    v4Address: entry.bestAddress,
    minterAddress: entry.minter,
    score: Number(entry.score)
  }));
});
