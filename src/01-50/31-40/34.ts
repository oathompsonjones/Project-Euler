import { factorial } from "../../Utils/utils.js";

const nums = [];

for (let i = 3; i < 1000000; i++) {
    const digits = i.toString().split("");
    const factorialDigits = digits.map((digit) => factorial(parseInt(digit, 10)));
    const sum = factorialDigits.reduce((a, b) => a + b);

    if (sum === i)
        nums.push(i);
}

export default nums.reduce((a, b) => a + b, 0);
