/* eslint-disable no-param-reassign */
const range = (start, end) => Array(end - start + 1).fill(0)
    .map((_, i) => start + i);
const map = (x, inMin, inMax, outMin, outMax) => (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
const factorial = (n) => Array(n).fill(0)
    .map((_, i) => i + 1)
    .reduce((a, b) => a * b, 1);
const hcf = (x, y) => {
    while (Math.max(x, y) % Math.min(x, y) !== 0) {
        if (x > y)
            x %= y;
        else
            y %= x;
    }
    return Math.min(x, y);
};
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
    let i = 1,
        m;
    do
        m = pentagonal(i++);
    while (m < n);
    return m === n;
};
const hexagonal = (n) => n * (2 * n - 1);
const isHexagonal = (n) => {
    const x = (1 + Math.sqrt(8 * n + 1)) / 4;
    return x - parseInt(x, 10) === 0;
};
const isPrime = (num) => {
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;
    if (num % 2 === 0 || num % 3 === 0)
        return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    }
    return true;
};
const isPandigital = (n) => Array(Math.min(n.toString().length, 9)).fill(0)
    .map((_, i) => i + 1)
    .every((d) => n.toString().includes(d));
const swap = (array1, index1, index2) => {
    const temp = array1[index1];
    array1[index1] = array1[index2];
    array1[index2] = temp;
};
const permutations = (a) => {
    const r = a.length - 1;
    const l = 0;
    const output = [];
    const permute = (_a, _l, _r) => {
        if (_l === _r) {
            output.push(_a.join(""));
        } else {
            for (let i = _l; i <= _r; i++) {
                swap(_a, _l, i);
                permute(_a, _l + 1, _r);
                swap(_a, _l, i);
            }
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
            const k = n / i;
            if (i !== k)
                arr.push(k);
            max = k;
        }
    }
    return arr.sort((a, b) => a - b);
};
const howPerfect = (n) => {
    let d = 0;
    for (let i = Math.floor(n / 2); i > 0; i--) {
        if (n % i === 0)
            d += i;
    }
    if (d === n)
        return "PERFECT";
    if (d < n)
        return "DEFICIENT";
    return "ABUNDANT";
};
const isPerfect = (num) => howPerfect(num) === "PERFECT";
const isAbundant = (num) => howPerfect(num) === "ABUNDANT";
const isDeficient = (num) => howPerfect(num) === "DEFICIENT";
const primeFactors = (n) => {
    const _factors = [];
    for (let divisor = 2; n >= 2;) {
        if (n % divisor === 0) {
            _factors.push(divisor);
            n /= divisor;
        } else {
            divisor++;
        }
    }
    return [...new Set(_factors)];
};
const arePermutations = (x, y) => {
    const xDigits = x.toString().split("")
        .map(Number);
    let yDigits = y.toString().split("")
        .map(Number);
    if (xDigits.length !== yDigits.length)
        return false;
    for (const digit of xDigits) {
        let index;
        if ((index = yDigits.indexOf(digit)) === -1)
            return false;
        yDigits = yDigits.filter((_, i) => i !== index);
    }
    return true;
};

const readFile = (path) => {
    const fs = require("fs");
    return fs.readFileSync(path, { encoding: "utf8" });
};

module.exports = {
    arePermutations,
    factorial,
    factors,
    hcf,
    hexagonal,
    isAbundant,
    isDeficient,
    isHexagonal,
    isPandigital,
    isPentagonal,
    isPerfect,
    isPrime,
    isTriangular,
    map,
    pentagonal,
    permutations,
    primeFactors,
    range,
    readFile,
    swap,
    triangular
};
