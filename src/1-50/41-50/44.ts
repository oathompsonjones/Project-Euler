import { isPentagonal, pentagonal } from "../../Utils/utils.js";

let found = false;
let difference = 0;
let pj = 0;
let pk = 0;
let sum = 0;

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
