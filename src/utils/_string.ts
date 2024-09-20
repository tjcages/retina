export function randomId(length = 10) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
}

export const id = randomId();

export const removeFirst = (src: string[], element: string) => {
  const index = src.indexOf(element);
  if (index === -1) return src;
  return [...src.slice(0, index), ...src.slice(index + 1)];
};

export const addressSubstring = (address: string) => {
  return `${address.substring(0, 6)}...${address.substring(address.length - 4, address.length)}`;
};

export const capFirst = (s: string, removeDash = false) => {
  const delimiter = removeDash ? " " : "-";
  if (s.includes("-")) {
    const words = s.split("-");
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(delimiter);
  } else {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
};

export const predictWiderString = (str1: string, str2: string) => {
  // Define character widths (approximations)
  const charWidths = {
    default: 1,
    narrow: 0.5, // i, l, t, f, j, ', |
    wide: 1.5, // m, w, capital letters
    extraWide: 2 // @
  };

  // Helper function to calculate string width
  function calculateWidth(str: string) {
    return str.split("").reduce((width, char) => {
      if ("iltfj'|".includes(char)) return width + charWidths.narrow;
      if ("mwABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(char)) return width + charWidths.wide;
      if (char === "@") return width + charWidths.extraWide;
      return width + charWidths.default;
    }, 0);
  }

  // Calculate widths
  const width1 = calculateWidth(str1);
  const width2 = calculateWidth(str2);

  // Compare and return result
  if (width1 > width2) return 0;
  if (width2 > width1) return 1;
  return -1;
};
