// Yeah using BigInteger is kinda cheating, but oh well.
let sum = 0n;

for (let i = 1n; i <= 1000n; i++)
    sum += i ** i;

export const answer = sum.toString().slice(sum.toString().length - 10);

/* This is better.
   (a * b) % c = ((a % c) * (b % c)) % c
   (a + b) % c = ((a % c) + (b % c)) % c */
let result = 0;
const modulo = 1e10;

for (let i = 1; i <= 1000; i++) {
    let temp = i;

    for (let j = 1; j < i; j++) {
        if ((temp *= i) >= modulo)
            temp %= modulo;
    }
    result += temp;
    result %= modulo;
}

export default result;
