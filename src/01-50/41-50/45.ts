import { isHexagonal, isPentagonal, triangular } from "../../Utils/utils.js";

let result = NaN;

for (let n = 286; isNaN(result); n++) {
    const tn = triangular(n);

    if (isHexagonal(tn) && isPentagonal(tn))
        result = tn;
}

export default result;
