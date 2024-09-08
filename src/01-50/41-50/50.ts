import { isPrime } from "../../Utils/utils.js";

/* eslint-disable @typescript-eslint/naming-convention */
const pi = {
    10: 4,
    100: 25,
    1_000: 168,
    10_000: 1_229,
    100_000: 9_592,
    1_000_000: 78_498,
};
/* eslint-enable @typescript-eslint/naming-convention */
const x = 1e6;

/**
 * Generates prime numbers.
 * @yields The next prime number.
 */
function* primeGeneratorFunc(): Generator<number, number> {
    let primeCounter = 1;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while (true) {
        while (!isPrime(++primeCounter))
            ;

        yield primeCounter;
    }
}
const primeGenerator = primeGeneratorFunc();
const primes = Array(pi[x]).fill(0).map(() => primeGenerator.next().value);

const primeSums: Record<number, number[]> = {};

for (let i = primes.length - 1; i > 1; i--) {
    for (let j = 0; j < primes.length; j++) {
        const sum: number[] = [];

        for (let k = j; k < Math.min(j + i, primes.length); k++)
            sum.push(primes[k]!);
        const sumValue = sum.reduce((a, b) => a + b);

        if (isPrime(sumValue) && sumValue < x && sum.length > (primeSums[sumValue]?.length ?? -1))
            primeSums[sumValue] = sum;
    }
}

let longestSumKey = -1;

for (const index in primeSums) {
    if (primeSums[longestSumKey] === undefined || primeSums[index]!.length > primeSums[longestSumKey]!.length)
        longestSumKey = Number(index);
}

export default longestSumKey;
// 997651
