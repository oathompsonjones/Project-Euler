const results = [];
for (let n = 10; n < 100; n++) {
    for (let d = n + 1; d < 100; d++) {
        const numerator = n.toString().split("");
        const denominator = d.toString().split("");
        const commonDigit = numerator.find(j => j === denominator.find(i => i === numerator[ 0 ] || i === numerator[ 1 ]));
        if (!commonDigit || commonDigit === "0") continue;
        const newNumerator = parseInt(numerator.join("").replace(commonDigit, ""));
        const newDenominator = parseInt(denominator.join("").replace(commonDigit, ""));
        if (n / d === newNumerator / newDenominator) results.push([ n, d ]);
    }
}

const finalNumerator = results.map(i => i[ 0 ]).reduce((a, b) => a * b);
const finalDenominator = results.map(i => i[ 1 ]).reduce((a, b) => a * b);

const HCF = (x, y) => {
    while (Math.max(x, y) % Math.min(x, y) !== 0) x > y ? x %= y : y %= x;
    return Math.min(x, y);
};

console.log(finalDenominator / HCF(finalNumerator, finalDenominator));