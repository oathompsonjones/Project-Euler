import { isPrime } from "../../utils.js";

let sum = 0;

for (let i = 2; i < 2e6; i++) {
    if (isPrime(i))
        sum += i;
}

export default sum;
