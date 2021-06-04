const isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
};

const euler = (n) => (n * n) + (n) + (41);
const notEuler = (n) => (n * n) - (79 * n) + (1601);
const newEqu = (a, b, n) => (n * n) + (a * n) + (b);

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

console.log([ A, B, N ]);
console.log(A * B);