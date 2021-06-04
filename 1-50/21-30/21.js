const d = (n) => {
    let divisors = [ 0 ];
    for (let i = Math.floor(n / 2); i > 0; i--) if (n % i === 0) divisors.push(i);
    return {
        divisors,
        total: divisors.reduce((a, b) => a + b)
    };
};

let nums = [];
for (let i = 1; i < 10000; i++) {
    const di = d(i).total;
    if (d(di).total === i && i !== d(i).total) {
        nums.push(i, d(i).total);
        console.log(`${i}: ${d(i).divisors.join(", ")}`);
        console.log(`${di}: ${d(di).divisors.join(", ")}`);
        console.log("\n");
    }
}
nums = [ ...new Set(nums) ];
console.log(nums);
console.log(nums.reduce((a, b) => a + b));