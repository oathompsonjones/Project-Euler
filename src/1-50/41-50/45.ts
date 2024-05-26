import { isHexagonal, isPentagonal, triangular } from "../../Utils/utils.js";

let result = null;

for (let n = 286; result === null; n++) {
    const tn = triangular(n);

    if (isHexagonal(tn) && isPentagonal(tn))
        result = tn;
}

console.log(result);
