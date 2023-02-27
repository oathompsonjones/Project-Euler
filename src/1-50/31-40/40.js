const decimal = Array(1e6 - 1).fill(0)
    .map((_, i) => (i + 1).toString())
    .reduce((a, b) => a + b)
    .split("")
    .map((digit) => parseInt(digit, 10));
let res = 1;
for (let i = 1; i < 1e6; i *= 10)
    res *= decimal[i - 1];
console.log(res);
