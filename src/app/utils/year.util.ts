/** The most recent 4-digit year found in a label (handles ranges like "2022 — 2023"). */
export function deriveYear(label: string): number | null {
  const matches = label.match(/\d{4}/g);
  if (!matches) return null;
  return Math.max(...matches.map(Number));
}
