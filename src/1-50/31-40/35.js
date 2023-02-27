const { isPrime } = require("../../Utils/utils");

const rotations = (n) => {
    const numbers = [];
    let num = n.toString();
    for (let i = 0; i < n.toString().length; i++) {
        numbers.push(num);
        num = `${num.split("")[num.length - 1]}${num.slice(0, num.length - 1)}`;
    }
    return numbers;
};
const primes = Array(1000000).fill(0)
    .map((x, i) => i)
    .filter((i) => isPrime(i));
const allCircularPrimes = primes.filter((prime) => rotations(prime).map((r) => isPrime(r))
    .every((b) => b));
console.log(allCircularPrimes.length);
