let num = 1;
let result = NaN;

while (isNaN(result)) {
    if (
        num % 1 === 0 &&
        num % 2 === 0 &&
        num % 3 === 0 &&
        num % 4 === 0 &&
        num % 5 === 0 &&
        num % 6 === 0 &&
        num % 7 === 0 &&
        num % 8 === 0 &&
        num % 9 === 0 &&
        num % 10 === 0 &&
        num % 11 === 0 &&
        num % 12 === 0 &&
        num % 13 === 0 &&
        num % 14 === 0 &&
        num % 15 === 0 &&
        num % 16 === 0 &&
        num % 17 === 0 &&
        num % 18 === 0 &&
        num % 19 === 0 &&
        num % 20 === 0
    )
        result = num;

    num++;
}

export default result;
