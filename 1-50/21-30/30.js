const numbers = [];
const digits = (n) => n.toString().split("").map(Number);
for (let i = 10; i < 1000000; i++) if (i === digits(i).map((i) => Math.pow(i, 5)).reduce((a, b) => a + b)) numbers.push(i);
console.log(numbers);
console.log(numbers.reduce((a, b) => a + b));