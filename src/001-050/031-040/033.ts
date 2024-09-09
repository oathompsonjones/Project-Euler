import { digits, highestCommonFactor, product } from "../../utils.js";

const results = [];

for (let n = 10; n < 100; n++) {
    for (let d = n + 1; d < 100; d++) {
        const num = digits(n);
        const den = digits(d);
        const commonDigit = num.find((j) => j === den.find((i) => i === num[0] || i === num[1]));

        if (commonDigit === undefined || commonDigit === 0)
            continue;

        const newNumerator = parseInt(num.join("").replace(commonDigit.toString(), ""), 10);
        const newDenominator = parseInt(den.join("").replace(commonDigit.toString(), ""), 10);

        if (n / d === newNumerator / newDenominator)
            results.push([n, d]);
    }
}

const finalNum = product(results.map((i) => i[0]!));
const finalDen = product(results.map((i) => i[1]!));

export default finalDen / highestCommonFactor(finalNum, finalDen);
