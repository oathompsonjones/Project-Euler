import { ncr } from "../../utils.js";

let count = 0;

for (let n = 1; n <= 100; n++) {
    for (let r = 0; r <= n; r++) {
        if (ncr(n, r) > 1e6)
            count++;
    }
}

export default count;
