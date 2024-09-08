import { isPrime } from "../../utils.js";

const limit = 1e6;
const primes = [];

for (let i = 2; i < limit; i++) {
    if (isPrime(i) && primes.reduce((a, b) => a + b, 0) + i < limit)
        primes.push(i);
}

let sum = 0;
let max = 0;
let maxSum = 0;

for (let i = 0; i < primes.length; i++) {
    sum = 0;
    for (let j = i; j < primes.length; j++) {
        sum += primes[j]!;

        if (sum > limit)
            break;

        if (isPrime(sum) && j - i > max) {
            max = j - i;
            maxSum = sum;
        }
    }
}

export default maxSum;
