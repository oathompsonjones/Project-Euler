const numbers = [];

for (let i = 10; i < 1000000; i++) {
    if (i === i.toString()
        .split("")
        .map((j) => Number(j) ** 5)
        .reduce((a, b) => a + b))
        numbers.push(i);
}

export default numbers.reduce((a, b) => a + b);
