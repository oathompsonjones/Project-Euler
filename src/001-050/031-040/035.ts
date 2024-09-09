import { isPrime, range, rotations } from "../../utils.js";

const circularPrimes = range(1e6)
    .filter(isPrime)
    .map((prime) => rotations([...prime.toString()]))
    .map((rots) => rots.map((chars) => Number(chars.join(""))))
    .filter((rots) => rots.every(isPrime));

export default circularPrimes.length;
