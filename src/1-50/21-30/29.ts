const numbers = [];

for (let a = 2; a <= 100; a++) {
    for (let b = 2; b <= 100; b++)
        numbers.push(a ** b);
}
console.log([...new Set(numbers)].length);
