const { isHexagonal, isPentagonal, triangular } = require("../../Utils/utils");

let result = null;

for (let n = 286; result === null; n++) {
    const tn = triangular(n);
    if (isHexagonal(tn) && isPentagonal(tn))
        result = tn;
}

console.log(result);