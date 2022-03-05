const { range } = require("../../Utils/utils");
const fs = require("fs");
const path = "/Users/oathompsonjones/Programming/JS/Project Euler/Utils/p042_words.txt";
fs.readFile(path, "utf8", (err, data) => {
    if (err) return console.log(err);

    const words = JSON.parse(`[${data}]`);
    const wordValues = words.map(word => word.toUpperCase().split("").map(char => char.charCodeAt(0) - 64).reduce((a, b) => a + b));
    const largestValue = wordValues.reduce((a, b) => Math.max(a, b));
    const triangulars = range(1, largestValue).map(i => 0.5 * i * (i + 1));
    const triangularWords = wordValues.filter(num => triangulars.includes(num));
    console.log(triangularWords.length);
});
