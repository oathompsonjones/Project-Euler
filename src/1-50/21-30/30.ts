const numbers = [];

function digits(n: number): number[] {
    return n.toString().split("").map(Number);
}

for (let i = 10; i < 1000000; i++) {
    if (i === digits(i).map((j) => j ** 5)
        .reduce((a, b) => a + b))
        numbers.push(i);
}
console.log(numbers.reduce((a, b) => a + b));
