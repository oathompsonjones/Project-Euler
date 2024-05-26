import { range } from "../../Utils/utils.js";
import { readFile } from "fs/promises";

const data = await readFile("/Users/oathompsonjones/Programming/JS/Project Euler/src/Utils/p042_words.txt", "utf-8");
const words = JSON.parse(`[${data}]`) as unknown as string[];
const wordValues = words.map((word) => word.toUpperCase().split("")
    .map((char) => char.charCodeAt(0) - 64)
    .reduce((a, b) => a + b));
const largestValue = wordValues.reduce((a, b) => Math.max(a, b));
const triangulars = range(1, largestValue).map((i) => 0.5 * i * (i + 1));
const triangularWords = wordValues.filter((num) => triangulars.includes(num));

export default triangularWords.length;
