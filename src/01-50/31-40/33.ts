import { hcf } from "../../Utils/utils.js";

const results = [];

for (let n = 10; n < 100; n++) {
    for (let d = n + 1; d < 100; d++) {
        const num = n.toString().split("");
        const den = d.toString().split("");
        const commonDigit = num.find((j) => j === den.find((i) => i === num[0] || i === num[1]));

        if (commonDigit === undefined || commonDigit === "0")
            continue;

        const newNumerator = parseInt(num.join("").replace(commonDigit, ""), 10);
        const newDenominator = parseInt(den.join("").replace(commonDigit, ""), 10);

        if (n / d === newNumerator / newDenominator)
            results.push([n, d]);
    }
}

const finalNum = results.map((i) => i[0]!).reduce((a, b) => a * b);
const finalDen = results.map((i) => i[1]!).reduce((a, b) => a * b);

export default finalDen / hcf(finalNum, finalDen);
