import { nChooseR } from "../../utils.js";

let count = 0;

for (let n = 1; n <= 100; n++) {
    for (let r = 0; r <= n; r++) {
        if (nChooseR(n, r) > 1e6)
            count++;
    }
}

export default count;
