import { divisors, sum } from "../../utils.js";

const d = (n: number): number => sum(divisors(n));

let nums = [];

for (let i = 1; i < 10000; i++) {
    const di = d(i);

    if (d(di) === i && i !== d(i))
        nums.push(i, d(i));
}
nums = [...new Set(nums)];

export default sum(nums);
