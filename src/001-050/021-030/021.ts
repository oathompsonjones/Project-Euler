import { factors, sum } from "../../utils.js";

const d = (n: number): number => sum(factors(n, true));

let nums = [];

for (let i = 1; i < 1e4; i++) {
    const di = d(i);

    if (d(di) === i && i !== d(i))
        nums.push(i, d(i));
}
nums = [...new Set(nums)];

export default sum(nums);
