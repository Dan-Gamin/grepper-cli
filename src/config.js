import chalk from "chalk";

export const searchQuery = (query) =>
  `https://www.codegrepper.com/api/search.php?q=${encodeURI(query)}`;

export const parseLanguage = (input) =>
  input
    .trim()
    .toLowerCase()
    .replace(/^py.*/, (c) => c + "python".substring(c.length))
    .replace(/^js/, "javascript")
    .replace(/^ts/, "typescript")
    .replace(/^gd.*/, (c) => c + "gdscript".substring(c.length))
