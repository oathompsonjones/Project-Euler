/* eslint-disable no-param-reassign */
function sequence(num: number): number[] {
    const _sequence = [];

    while (num !== 1) {
        _sequence.push(num);

        if (num % 2 === 0)
            num /= 2;
        else
            num = num * 3 + 1;
    }

    return _sequence;
}

let longestSequenceLength = 0;
let longestSequenceNumber = 0;

for (let i = 1; i < 1000000; i++) {
    const temp = sequence(i);

    if (temp.length > longestSequenceLength) {
        longestSequenceLength = temp.length;
        longestSequenceNumber = i;
    }
}

export default longestSequenceNumber;
