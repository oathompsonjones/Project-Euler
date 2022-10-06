const { range, readFile } = require("../../Utils/utils");

const data = readFile("/Users/oathompsonjones/Programming/JS/Project Euler/src/Utils/p042_words.txt");
const words = JSON.parse(`[${data}]`);
const wordValues = words.map(word => word.toUpperCase().split("").map(char => char.charCodeAt(0) - 64).reduce((a, b) => a + b));
const largestValue = wordValues.reduce((a, b) => Math.max(a, b));
const triangulars = range(1, largestValue).map(i => 0.5 * i * (i + 1));
const triangularWords = wordValues.filter(num => triangulars.includes(num));
console.log(triangularWords.length);
