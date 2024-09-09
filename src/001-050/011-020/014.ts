
let longestSequenceLength = 0;
let longestSequenceNumber = 0;

for (let i = 1; i < 1000000; i++) {
    let num = i;
    const sequence = [];

    while (num !== 1) {
        sequence.push(num);

        if (num % 2 === 0)
            num /= 2;
        else
            num = num * 3 + 1;
    }

    if (sequence.length > longestSequenceLength) {
        longestSequenceLength = sequence.length;
        longestSequenceNumber = i;
    }
}

export default longestSequenceNumber;
