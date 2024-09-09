import { isPrime, sum } from "../../utils.js";

const limit = 1e6;
const primes = [];

for (let i = 2; i < limit; i++) {
    if (isPrime(i) && sum(primes) + i < limit)
        primes.push(i);
}

let sum_ = 0;
let max = 0;
let maxSum = 0;

for (let i = 0; i < primes.length; i++) {
    sum_ = 0;
    for (let j = i; j < primes.length; j++) {
        sum_ += primes[j]!;

        if (sum_ > limit)
            break;

        if (isPrime(sum_) && j - i > max) {
            max = j - i;
            maxSum = sum_;
        }
    }
}

export default maxSum;
