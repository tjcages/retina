export interface LeaderboardEntry {
  rank: number;
  v4Address: string;
  score: number;
  scoreBreakdown?: {
    leadingZeroNibbles?: number;
    firstFourIsFollowedByThreeFours?: number;
    lastFourNibblesAreFours?: number;
    numberOfFours?: number;
  };
  minterAddress: string;
  uniPfpSrc?: string;
  uniUsername?: string;
  badge?: "longest" | "blaze" | "four" | "zero" | "general";
}
