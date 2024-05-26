import { isPrime } from "../../Utils/utils.js";

let sum = 0;

for (let i = 2; i < 2000000; i++) {
    if (isPrime(i))
        sum += i;
}

export default sum;
