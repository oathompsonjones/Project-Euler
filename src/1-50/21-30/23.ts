import { isAbundant } from "../../Utils/utils.js";

// All numbers larger can be expressed as the sum of 2 abundant numbers.
const upperLimit = 28123;
const abundant = Object.keys(new Array(upperLimit).fill(0)).map((i) => parseInt(i, 10))
    .filter((i) => isAbundant(i));

let abundantSums: number[] = [];

for (const i of abundant) {
    for (const j of abundant)
        abundantSums.push(i + j);
}
abundantSums = [...new Set(abundantSums)];

const notSumOfAbunadant = Object.keys(new Array(upperLimit).fill(0)).map((i) => parseInt(i, 10))
    .filter((i) => !abundantSums.includes(i));

console.log(notSumOfAbunadant.reduce((a, b) => a + b));
