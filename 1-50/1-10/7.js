let primes = [ 2 ];
for (let i = 3; primes.length <= 10001; i += 2) {
    if (primes.every(v => i % v !== 0)) {
        primes.push(i);
        if (primes.length === 10001) {
            console.log(i);
        }
    }
}