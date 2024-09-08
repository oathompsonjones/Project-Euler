const primes = [2];

for (let i = 3; primes.length <= 10001; i += 2) {
    if (primes.every((v) => i % v !== 0))
        primes.push(i);
}

export default primes[10000];
