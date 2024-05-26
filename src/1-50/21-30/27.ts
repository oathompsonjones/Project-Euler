import { isPrime } from "../../Utils/utils.js";

function newEqu(a: number, b: number, n: number): number {
    return n * n + a * n + b;
}

let N = 0;
let A = 0;
let B = 0;

for (let a = -999; a < 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
        let stillPrime = true;
        let n = 0;

        while (stillPrime) {
            const out = newEqu(a, b, n);

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

console.log(A * B);
