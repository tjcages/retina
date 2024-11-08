export interface LeaderboardEntry {
  rank: number;
  v4Address: string;
  score: number;
  minterAddress: string;
  uniPfpSrc?: string;
  uniUsername?: string;
  badge?: "longest" | "blaze" | "four" | "zero" | "general";
}
