const getCycleSize = (num: number): number => {
    let numerator = 1;
    const numerators = [];
    const numeratorDigits = [];

    let digitsInSequence = 0;

    while (!digitsInSequence) {
        if (numerator === 0)
            return 0;

        // Check if the numerator is previously repeated
        for (let i = 0; i < numerators.length; i++) {
            if (numerator === numerators[i]) {
                digitsInSequence = 0;
                for (let j = i; j < numerators.length; j++)
                    digitsInSequence += numeratorDigits[j]!;

                return digitsInSequence;
            }
        }

        // Repeat not found, update the numerators and digits
        numerators[numerators.length] = numerator;
        let digits = 1;

        while (num > numerator) {
            numerator *= 10;
            digits++;
        }

        numeratorDigits[numeratorDigits.length] = digits;
        // Get the next numerator
        numerator %= num;
    }

    return NaN;
};

let longestNum = 1;
let largestCycleSize = 1;

for (let currentNum = longestNum + 1; currentNum <= 1e3; currentNum++) {
    const cycleSize = getCycleSize(currentNum);

    if (cycleSize > largestCycleSize) {
        largestCycleSize = cycleSize;
        longestNum = currentNum;
    }
}

export default longestNum;

