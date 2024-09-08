import { isPrime } from "../../utils.js";

const rotations = (n: number): string[] => {
    const numbers = [];
    let num = n.toString();

    for (const _ of n.toString()) {
        numbers.push(num);
        num = `${num.split("")[num.length - 1]}${num.slice(0, num.length - 1)}`;
    }

    return numbers;
};

const primes = Array(1000000).fill(0).map((_, i) => i)
    .filter((i) => isPrime(i));
const allCircularPrimes = primes.filter((prime) => rotations(prime).map((r) => isPrime(Number(r))).every((b) => b));

export default allCircularPrimes.length;
