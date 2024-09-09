import { digits } from "../../utils.js";

let count = 0;

for (let i = 1; i < 1e4; i++) {
    let reverse = parseInt(digits(i).reverse().join(""), 10);
    let isLychrel = true;

    let j = i;

    for (let k = 0; k < 50; k++) {
        j += reverse;
        reverse = parseInt(digits(j).reverse().join(""), 10);

        if (j === reverse) {
            isLychrel = false;
            break;
        }
    }

    if (isLychrel)
        count++;
}

export default count;
