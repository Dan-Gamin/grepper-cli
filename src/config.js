import chalk from "chalk";
import path from "path";
import { fileURLToPath } from "url";

export const searchQuery = (query) =>
  `https://www.codegrepper.com/api/search.php?q=${encodeURI(query)}`;

export const projRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

export const parseLanguage = (input) =>
  input
    .trim()
    .toLowerCase()
    .replace(/^py.*/, (c) => c + "python".substring(c.length))
    .replace(/^js/, "javascript")
    .replace(/^ts/, "typescript")
    .replace(/^gd.*/, (c) => c + "gdscript".substring(c.length))
