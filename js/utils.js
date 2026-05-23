export function parseKiValue(kiStr) {
  if (!kiStr || kiStr === "N/A" || kiStr === "---") return 0;
  const cleaned = kiStr.replace(/\./g, "").replace(/,/g, "").trim();
  const multipliers = {
    thousand: 1e3, million: 1e6, billion: 1e9,
    trillion: 1e12, quadrillion: 1e15, quintillion: 1e18,
    sextillion: 1e21, septillion: 1e24, octillion: 1e27,
    nonillion: 1e30, decillion: 1e33, googolplex: 1e100
  };
  const lower = cleaned.toLowerCase();
  for (const [word, mult] of Object.entries(multipliers)) {
    if (lower.includes(word)) {
      const numPart = parseFloat(lower.replace(word, "").trim()) || 1;
      return numPart * mult;
    }
  }
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
}
