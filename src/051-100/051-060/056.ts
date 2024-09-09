import { digits, sum } from "../../utils.js";

let max = 0;

for (let a = 0n; a < 100n; a++) {
    for (let b = 0n; b < 100n; b++)
        max = Math.max(max, sum(digits(a ** b)));
}

export default max;
