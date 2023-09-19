export function formatNumber(number) {
  const suffixes = ["", "K", "M", "B"];
  let suffixIndex = 0;
  while (number >= 1000 && suffixIndex < suffixes.length - 1) {
    number /= 1000;
    suffixIndex++;
  }

  return number ? number.toFixed(1) + suffixes[suffixIndex] : 0;
}
const languageData = [
  {
    color: "#f1e05a",
    language: "JavaScript",
  },
  {
    color: "#3572A5",
    language: "Python",
  },
  {
    color: "#b07219",
    language: "Java",
  },
  {
    color: "#6A737D",
    language: "TypeScript",
  },
  {
    color: "#5A67D8",
    language: "HTML",
  },
  {
    color: "#5A67D8",
    language: "CSS",
  },
];

export function getColorByLanguage(language) {
  // Find the corresponding color for the language
  const languageInfo = languageData.find(
    (entry) => entry.language.toLowerCase() === language?.toLowerCase()
  );
  if (languageInfo) {
    const { color, language: langName } = languageInfo;
    return color;
  } else {
    return "";
  }
}
