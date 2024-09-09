import { isPandigital, isPrime, range } from "../../utils.js";

/**
 * Notes:
 * Any number whose digit sum is divisible by 3 is also divisible by 3.
 * => Any pandigital that isn't 4 digits or 7 digits is not prime.
 */
export default Math.max(...[...range(1000, 9999), ...range(1000000, 9999999)].filter(isPandigital).filter(isPrime));
