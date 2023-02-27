const { isPrime, range, permutations } = require("../../Utils/utils.js");
const nums = permutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const funnyNums = [];
const primes = range(0, 17).filter(isPrime);
nums.forEach((num) => {
    const subStrings = [];
    for (let i = 0; i < 7; i++)
        subStrings.push(parseInt(num.substr(i + 1, 3), 10));
    const isFunny = subStrings.every((x, i) => x % primes[i] === 0);
    if (isFunny)
        funnyNums.push(parseInt(num, 10));
});
console.log(funnyNums.reduce((a, b) => a + b));
