const number = [1];
let sum = 0;

for (let i = 0; i < 1000; i++) {
    let overflow = 0;
    const count = number.length + 1;

    for (let j = 0; j < count; j++) {
        let digit = number[j] ?? 0;

        digit = 2 * digit + overflow;

        if (digit > 9) {
            digit -= 10;
            overflow = 1;
        } else {
            overflow = 0;
        }

        number[j] = digit;
    }
}
for (let i = 0; i < 1000; i++)
    sum += number[i]!;

export default sum;
