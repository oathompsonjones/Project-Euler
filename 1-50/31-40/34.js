const factorial = (n) => n === 0 ? 1 : Object.keys([ ...Array(n).fill(0) ]).map((i) => parseInt(i) + 1).reduce((a, b) => a * b);
const nums = [];
for (let i = 3; i < 1000000; i++) {
    const digits = i.toString().split("");
    const factorialDigits = digits.map((digit) => factorial(parseInt(digit)));
    const sum = factorialDigits.reduce((a, b) => a + b);
    if (sum === i) nums.push(i);
}
console.log(nums.reduce((a, b) => a + b));