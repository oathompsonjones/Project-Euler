const start = Date.now();

const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
    return num > 1;
};
const primes = Array(1e6).fill(0).map((x, i) => i).filter(isPrime);
const truncatableLeftToRight = primes.filter((prime) => {
    let str = prime.toString();
    while (str.length > 1) {
        str = str.slice(1);
        if (!isPrime(parseInt(str))) return false;
    }
    return true;
});
const truncatableBothWays = truncatableLeftToRight.filter((prime) => {
    let str = prime.toString();
    while (str.length > 1) {
        str = str.slice(0, str.length - 1);
        if (!isPrime(parseInt(str))) return false;
    }
    return true;
});
console.log(truncatableBothWays.filter((prime) => prime > 10).reduce((a, b) => a + b));

console.log(`${Date.now() - start}ms`);