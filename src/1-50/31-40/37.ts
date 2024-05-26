import { isPrime } from "../../Utils/utils.js";

const primes = Array(1e6).fill(0)
    .map((_, i) => i)
    .filter(isPrime);
const truncatableLeftToRight = primes.filter((prime) => {
    let str = prime.toString();

    while (str.length > 1) {
        str = str.slice(1);

        if (!isPrime(parseInt(str, 10)))
            return false;
    }

    return true;
});
const truncatableBothWays = truncatableLeftToRight.filter((prime) => {
    let str = prime.toString();

    while (str.length > 1) {
        str = str.slice(0, str.length - 1);

        if (!isPrime(parseInt(str, 10)))
            return false;
    }

    return true;
});

console.log(truncatableBothWays.filter((prime) => prime > 10).reduce((a, b) => a + b));
