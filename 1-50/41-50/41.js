const { range, isPrime, isPandigital } = require("../../Utils/utils.js");
/**
 * Notes:
 * Any number whose digit sum is divisible by 3 is also divisible by 3.
 * => Any pandigital that isn't 4 digits or 7 digits is not prime.
 */
const pandigitals = range(1000, 9999).filter(isPandigital).concat(range(1000000, 9999999).filter(isPandigital));
const primes = pandigitals.filter(isPrime);
console.log(primes.reduce((a, b) => Math.max(a, b)));