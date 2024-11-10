import { Badge } from "./types";

// longest road: most consecutive 4s in an address
// blaze: the presence of "420" in an address
// zero: The most leading 0s in an address
// four: Addresses that begins with four 4s
// Four star general: The most 4s in an address
export function calculateBadges(
  _allAddresses: string[],
  {
    currentMaxConsecutive4s,
    currentMaxLeadingZeros,
    currentMaxTotalFours
  }: {
    currentMaxConsecutive4s: number;
    currentMaxLeadingZeros: number;
    currentMaxTotalFours: number;
  }
): {
  addressToBadges: Record<string, Badge[]>;
  maxConsecutive4s: number;
  maxLeadingZeros: number;
  maxTotalFours: number;
} {
  //
  const allAddresses = _allAddresses.map(addr => addr.replace(/^0x/, ""));

  // Calculate global maximums
  const newMaxConsecutive4s = Math.max(
    ...allAddresses.map(addr =>
      addr
        .split(/[^4]/)
        .map(s => s.length)
        .reduce((a, b) => Math.max(a, b), 0)
    )
  );
  const newMaxLeadingZeros = Math.max(
    ...allAddresses.map(addr => (addr.match(/^0+/) ?? [""])[0].length)
  );
  const newMaxTotalFours = Math.max(
    ...allAddresses.map(addr => addr.split("").filter(c => c === "4").length)
  );

  const maxConsecutive4s = Math.max(currentMaxConsecutive4s, newMaxConsecutive4s);
  const maxLeadingZeros = Math.max(currentMaxLeadingZeros, newMaxLeadingZeros);
  const maxTotalFours = Math.max(currentMaxTotalFours, newMaxTotalFours);

  const map = allAddresses.reduce(
    (acc, addr) => {
      const badges: Badge[] = [];

      const consecutive4s = addr
        .split(/[^4]/)
        .map(s => s.length)
        .reduce((a, b) => Math.max(a, b), 0);
      const leadingZeros = (addr.match(/^0+/) ?? [""])[0].length;
      const totalFours = addr.split("").filter(c => c === "4").length;

      if (consecutive4s === maxConsecutive4s && consecutive4s > 0) badges.push("longest");
      if (addr.includes("420")) badges.push("blaze");
      if (leadingZeros === maxLeadingZeros && leadingZeros > 0) badges.push("zero");
      if (addr.startsWith("4444")) badges.push("four");
      if (totalFours === maxTotalFours && totalFours > 0) badges.push("general");

      acc["0x" + addr] = badges;
      return acc;
    },
    {} as Record<string, Badge[]>
  );

  return {
    addressToBadges: map,
    maxConsecutive4s,
    maxLeadingZeros,
    maxTotalFours
  };
}
