export type Badge = "longest" | "blaze" | "four" | "zero" | "general";

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
  avatarSrc?: string;
  username?: string;
  badges: Badge[];
}

export type UnitagsAddressesResponse = {
  usernames: Record<
    string,
    {
      username?: string;
      address?: string;
      metadata?: {
        avatar?: string;
        description?: string;
        twitter?: string;
      };
    }
  >;
};
