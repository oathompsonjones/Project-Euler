import { isPrime, range, sum } from "../../utils.js";

const primes = range(1e6).filter(isPrime);
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

export default sum(truncatableBothWays.filter((prime) => prime > 10));
