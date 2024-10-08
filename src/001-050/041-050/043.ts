import { isPrime, permutations, range, sum } from "../../utils.js";

const nums = permutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).map((x) => x.join(""));
const funnyNums: number[] = [];
const primes = range(18).filter(isPrime);

nums.forEach((num) => {
    const subStrings = [];

    for (let i = 0; i < 7; i++)
        subStrings.push(parseInt(num.substring(i + 1, i + 4), 10));
    // eslint-disable-next-line @typescript-eslint/no-confusing-non-null-assertion
    const isFunny = subStrings.every((x, i) => x % primes[i]! === 0);

    if (isFunny)
        funnyNums.push(parseInt(num, 10));
});

export default sum(funnyNums);
