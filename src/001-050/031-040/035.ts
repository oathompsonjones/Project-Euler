import { isPrime, range, rotations } from "../../utils.js";

const primes = range(1e6).filter(isPrime);
const allCircularPrimes = primes.filter((prime) => rotations(prime).every(isPrime));

export default allCircularPrimes.length;
