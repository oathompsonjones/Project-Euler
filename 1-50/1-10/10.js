function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i < num; i++) {
        if (isPrime(i)) {
            sum += i;
            console.log(sum);
        }
    }
    return sum;
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    } else if (num <= 3) {
        return true;
    } else if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true
}

console.log(sumPrimes(2000000));