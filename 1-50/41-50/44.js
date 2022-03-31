const { pentagonal, isPentagonal } = require("../../Utils/utils.js");

let found, pj, pk, sum, difference;

for (let j = 1; !found && j < 10000; j++) {
    for (let k = j + 1; !found && k < 10000; k++) {
        pj = pentagonal(j);
        pk = pentagonal(k);
        sum = pj + pk;
        difference = Math.abs(pj - pk);
        found = isPentagonal(sum) && isPentagonal(difference);
    }
}

console.log(difference);