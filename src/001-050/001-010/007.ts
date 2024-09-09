const primes = [2];

for (let i = 3; primes.length <= 1e4 + 1; i += 2) {
    if (primes.every((v) => i % v !== 0))
        primes.push(i);
}

export default primes[1e4];
