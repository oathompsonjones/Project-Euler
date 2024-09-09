import { arePermutations, range } from "../../utils.js";

let result = NaN;

for (let i = 1; isNaN(result); i++) {
    const nums = range(2, 7).map((n) => i * n);
    let allSameDigits = true;

    for (const num of nums)
        allSameDigits &&= arePermutations(i, num);

    if (allSameDigits)
        result = i;
}

export default result;
