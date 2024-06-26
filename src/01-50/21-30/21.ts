function d(n: number): { divisors: number[]; total: number; } {
    const divisors = [0];

    for (let i = Math.floor(n / 2); i > 0; i--) {
        if (n % i === 0)
            divisors.push(i);
    }

    return {
        divisors,
        total: divisors.reduce((a, b) => a + b),
    };
}

let nums = [];

for (let i = 1; i < 10000; i++) {
    const di = d(i).total;

    if (d(di).total === i && i !== d(i).total)
        nums.push(i, d(i).total);
}
nums = [...new Set(nums)];

export default nums.reduce((a, b) => a + b);
