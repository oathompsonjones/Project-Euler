import { range, sum } from "../../utils.js";
import { readFile } from "fs/promises";

const data = await readFile("inputs/p042_words.txt", "utf-8");
const words = JSON.parse(`[${data}]`) as unknown as string[];
const wordValues = words.map((word) => sum(word.toUpperCase().split("").map((char) => char.charCodeAt(0) - 64)));
const largestValue = Math.max(...wordValues);
const triangulars = range(1, largestValue + 1).map((i) => 0.5 * i * (i + 1));
const triangularWords = wordValues.filter((num) => triangulars.includes(num));

export default triangularWords.length;
