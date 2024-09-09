import { isPrime } from "../../utils.js";

let N = 0;
let A = 0;
let B = 0;

for (let a = 1 - 1e3; a < 1e3; a++) {
    for (let b = -1e3; b <= 1e3; b++) {
        let stillPrime = true;
        let n = 0;

        while (stillPrime) {
            const out = n * n + a * n + b;

            stillPrime = isPrime(out);
            n++;
        }

        if (n > N) {
            N = n;
            A = a;
            B = b;
        }
    }
}

export default A * B;
