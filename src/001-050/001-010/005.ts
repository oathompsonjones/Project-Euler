let result = NaN;

for (let num = 20; isNaN(result); num += 20) {
    if (
        num % 19 === 0 &&
        num % 18 === 0 &&
        num % 17 === 0 &&
        num % 16 === 0 &&
        num % 15 === 0 &&
        num % 14 === 0 &&
        num % 13 === 0 &&
        num % 12 === 0 &&
        num % 11 === 0
    )
        result = num;
}

export default result;
