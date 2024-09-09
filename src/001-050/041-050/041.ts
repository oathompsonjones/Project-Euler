import { isPandigital, isPrime, range } from "../../utils.js";

/**
 * Notes:
 * Any number whose digit sum is divisible by 3 is also divisible by 3.
 * => Any pandigital that isn't 4 digits or 7 digits is not prime.
 */
export default Math.max(...[...range(1e3, 1e4 - 1), ...range(1e6, 1e7 - 1)].filter(isPandigital).filter(isPrime));
