import { isPrime, rotations } from "../../utils.js";

const primes = Array.from({ length: 1e6 }, (_, i) => i).filter(isPrime);
const allCircularPrimes = primes.filter((prime) => rotations(prime).every(isPrime));

export default allCircularPrimes.length;
