const howPerfect = (n) => {
    let d = 0;
    for (let i = Math.floor(n / 2); i > 0; i--) if (n % i === 0) d += i;
    if (d === n) return "PERFECT";
    else if (d < n) return "DEFICIENT";
    else return "ABUNDANT";
};

const isPerfect = (num) => howPerfect(num) === "PERFECT";
const isAbundant = (num) => howPerfect(num) === "ABUNDANT";
const isDeficient = (num) => howPerfect(num) === "DEFICIENT";

const upperLimit = 28123; // All numbers larger can be expressed as the sum of 2 abundant numbers.
const abundant = Object.keys(new Array(upperLimit).fill(0)).map((i) => parseInt(i)).filter((i) => isAbundant(i));

let abundantSums = [];
for (let i = 0; i < abundant.length; i++) {
    for (let j = 0; j < abundant.length; j++) {
        abundantSums.push(abundant[ i ] + abundant[ j ]);
    }
}
abundantSums = [ ...new Set(abundantSums) ];

const notSumOfAbunadant = Object.keys(new Array(upperLimit).fill(0)).map((i) => parseInt(i)).filter((i) => !abundantSums.includes(i));
console.log(notSumOfAbunadant);
console.log(notSumOfAbunadant.reduce((a, b) => a + b));