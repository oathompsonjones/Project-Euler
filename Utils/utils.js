const range = (start, end) => Array(end - start + 1).fill(0).map((_, idx) => start + idx);
const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return n > 1;
};
const isPandigital = (n) => Array(Math.min(n.toString().length, 9)).fill(0).map((_, i) => i + 1).every((d) => n.toString().includes(d));
const factorial = (n) => Array(n).fill(0).map((_, i) => i + 1).reduce((a, b) => a * b);
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
        else {
            for (let i = l; i <= r; i++) {
                swap(a, l, i);
                permute(a, l + 1, r);
                swap(a, l, i);
            }
        }
    };
    permute(a, l, r);
    return output;
};
const pentagonal = (n) => n * (3 * n - 1) / 2;

module.exports = { range, isPrime, isPandigital, factorial, swap, permutations, pentagonal };