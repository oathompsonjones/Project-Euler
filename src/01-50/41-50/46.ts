import { isPrime } from "../../utils.js";

let result = NaN;

for (let i = 9; isNaN(result); i += 2) {
    if (isPrime(i))
        continue;

    for (let j = 1; j < Math.sqrt(i); j++) {
        if (isPrime(i - 2 * j * j)) {
            result = NaN;
            break;
        } else {
            result = i;
        }
    }
}

export default result;
