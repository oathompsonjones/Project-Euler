import { factorial, sum } from "../../utils.js";

const nums = [];

for (let i = 3; i < 1000000; i++) {
    const digits = i.toString().split("");
    const factorialDigits = digits.map((digit) => factorial(parseInt(digit, 10)));

    if (sum(factorialDigits) === i)
        nums.push(i);
}

export default sum(nums);
