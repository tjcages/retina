interface ScoreBreakdown {
  totalScore: number;
  leadingZeros: {
    count: number;
    score: number;
  };
  leadingFours: {
    count: number;
    score: number;
  };
  additionalFours: {
    count: number;
    score: number;
  };
  trailingFours: {
    has: boolean;
    score: number;
  };
}

function computeAddressScore(address: string): ScoreBreakdown {
  // Remove '0x' prefix if present
  const cleanAddress = address.toLowerCase().startsWith("0x") ? address.slice(2) : address;

  if (!/^[0-9a-f]{40}$/i.test(cleanAddress)) {
    throw new Error("Invalid Ethereum address format");
  }

  const breakdown: ScoreBreakdown = {
    totalScore: 0,
    leadingZeros: { count: 0, score: 0 },
    leadingFours: { count: 0, score: 0 },
    additionalFours: { count: 0, score: 0 },
    trailingFours: { has: false, score: 0 }
  };

  // Count leading zeros
  let i = 0;
  while (i < cleanAddress.length && cleanAddress[i] === "0") {
    breakdown.leadingZeros.count++;
    i++;
  }
  breakdown.leadingZeros.score = breakdown.leadingZeros.count * 10;
  breakdown.totalScore += breakdown.leadingZeros.score;

  // Count leading fours after zeros
  let fourCount = 0;
  while (i < cleanAddress.length && cleanAddress[i] === "4") {
    fourCount++;
    i++;
  }
  breakdown.leadingFours.count = fourCount;

  // If first non-zero nibble is not 4, return 0
  if (fourCount === 0) {
    return {
      ...breakdown,
      totalScore: 0
    };
  }

  // Score leading fours
  if (fourCount === 4) {
    breakdown.leadingFours.score = 60;
  } else if (fourCount > 4) {
    breakdown.leadingFours.score = 40;
  }
  breakdown.totalScore += breakdown.leadingFours.score;

  // Count and score all additional fours
  const totalFours = (cleanAddress.match(/4/g) || []).length;
  breakdown.additionalFours.count = totalFours;
  breakdown.additionalFours.score = totalFours;
  breakdown.totalScore += breakdown.additionalFours.score;

  // Check if last 4 nibbles are 4s
  const lastFourNibbles = cleanAddress.slice(-4);
  if (lastFourNibbles === "4444") {
    breakdown.trailingFours.has = true;
    breakdown.trailingFours.score = 20;
    breakdown.totalScore += breakdown.trailingFours.score;
  }

  return breakdown;
}

export { computeAddressScore, type ScoreBreakdown };
