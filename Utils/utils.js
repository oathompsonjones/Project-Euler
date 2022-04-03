const range = (start, end) => Array(end - start + 1).fill(0).map((_, i) => start + i);
const map = (x, inMin, inMax, outMin, outMax) => ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
const factorial = (n) => Array(n).fill(0).map((_, i) => i + 1).reduce((a, b) => a * b, 1);
const triangular = (n) => n * (n + 1) / 2;
const isTriangular = (n) => {
    if (n < 0)
        return false;
    let sum = 0;
    for (let i = 1; sum <= n; i++) {
        sum += i;
        if (sum === n)
            return true;
    }
    return false;
};
const pentagonal = (n) => n * (3 * n - 1) / 2;
const isPentagonal = (n) => {
    let i = 1, m;
    do m = pentagonal(i++);
    while (m < n);
    return m === n;
};
const hexagonal = (n) => n * (2 * n - 1);
const isHexagonal = (n) => {
    const x = (1 + Math.sqrt(8 * n + 1)) / 4;
    return (x - parseInt(x)) == 0;
};
const isPrime = (num) => {
    if (num <= 1)
        return false;
    else if (num <= 3)
        return true;
    else if (num % 2 === 0 || num % 3 === 0)
        return false;
    for (let i = 5; i * i <= num; i += 6)
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    return true;
};
const isPandigital = (n) => Array(Math.min(n.toString().length, 9)).fill(0).map((_, i) => i + 1).every((d) => n.toString().includes(d));
const swap = (array1, index1, index2) => {
    let temp;
    temp = array1[ index1 ];
    array1[ index1 ] = array1[ index2 ];
    array1[ index2 ] = temp;
};
const permutations = (a) => {
    let r = a.length - 1;
    let l = 0;
    const output = [];
    const permute = (a, l, r) => {
        if (l == r) output.push(a.join(""));
        else for (let i = l; i <= r; i++) {
            swap(a, l, i);
            permute(a, l + 1, r);
            swap(a, l, i);
        }
    };
    permute(a, l, r);
    return output;
};
const factors = (n) => {
    const arr = [];
    let max = n;
    for (let i = 1; i < max; i++) {
        if (n % i === 0) {
            arr.push(i);
            let k = n / i;
            if (i !== k)
                arr.push(k);
            max = k;
        }
    }
    return arr.sort((a, b) => a - b);
};
const howPerfect = (n) => {
    let d = 0;
    for (let i = Math.floor(n / 2); i > 0; i--)
        if (n % i === 0) d += i;
    if (d === n) return "PERFECT";
    else if (d < n) return "DEFICIENT";
    else return "ABUNDANT";
};
const isPerfect = (num) => howPerfect(num) === "PERFECT";
const isAbundant = (num) => howPerfect(num) === "ABUNDANT";
const isDeficient = (num) => howPerfect(num) === "DEFICIENT";
const primeFactors = (n) => {
    const factors = [];
    for (let divisor = 2; n >= 2;) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n /= divisor;
        }
        else divisor++;
    }
    return [ ... new Set(factors) ];
};

const readFile = (path) => {
    const fs = require("fs");
    return fs.readFileSync(path, { encoding: "utf8" });
};

module.exports = {
    range,
    map,
    factorial,
    triangular,
    isTriangular,
    pentagonal,
    isPentagonal,
    hexagonal,
    isHexagonal,
    isPrime,
    isPandigital,
    swap,
    permutations,
    factors,
    isPerfect,
    isAbundant,
    isDeficient,
    primeFactors,
    readFile
};