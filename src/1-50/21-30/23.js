const { isAbundant } = require("../../Utils/utils");

// All numbers larger can be expressed as the sum of 2 abundant numbers.
const upperLimit = 28123;
const abundant = Object.keys(new Array(upperLimit).fill(0)).map((i) => parseInt(i, 10))
    .filter((i) => isAbundant(i));

let abundantSums = [];
for (let i = 0; i < abundant.length; i++) {
    for (let j = 0; j < abundant.length; j++)
        abundantSums.push(abundant[i] + abundant[j]);
}
abundantSums = [...new Set(abundantSums)];

const notSumOfAbunadant = Object.keys(new Array(upperLimit).fill(0)).map((i) => parseInt(i, 10))
    .filter((i) => !abundantSums.includes(i));
console.log(notSumOfAbunadant.reduce((a, b) => a + b));
