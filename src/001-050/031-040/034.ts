import { digits, factorial, sum } from "../../utils.js";

const nums = [];

for (let i = 3; i < 1e6; i++) {
    if (sum(digits(i).map(factorial)) === i)
        nums.push(i);
}

export default sum(nums);
