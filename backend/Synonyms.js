const synonymGroups = [
  ["maths", "math", "mathematics"],
  ["programming", "coding", "program"],
  ["bee", "basic electrical engineering", "electrical engineering"],
  ["physics", "phy"],
  ["chemistry", "chem"],
  ["mechanics", "mech"],
  ["c programming", "c language", "c lang"],
];

export function expandSynonyms(term) {
  const lower = term.toLowerCase().trim();

  const matchedGroup = synonymGroups.find((group) =>
    group.some((word) => lower.includes(word) || word.includes(lower)),
  );

  if (matchedGroup) {
    return [...new Set([lower, ...matchedGroup])];
  }

  return [lower];
}
