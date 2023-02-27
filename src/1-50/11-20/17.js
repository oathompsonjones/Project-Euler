const baseNumbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const baseTens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function countLettersTo1000() {
    let count = 0;

    // 1-9
    for (let i = 0; i < baseNumbers.length; i++) {
        const baseNumber = baseNumbers[i];
        count += baseNumber.length;
    }

    // 10-19
    for (let i = 0; i < teens.length; i++) {
        const teen = teens[i];
        count += teen.length;
    }

    // 20-99
    for (let i = 0; i < baseTens.length; i++) {
        const baseTen = baseTens[i];
        for (let j = 0; j < baseNumbers.length; j++) {
            const baseNumber = baseNumbers[j];
            count += baseTen.length + baseNumber.length;
        }
    }

    const oneToOneHundred = count;

    // 100-999
    for (let i = 1; i < baseNumbers.length; i++) {
        const hundredsPrefix = `${baseNumbers[i]}hundred`;

        count += hundredsPrefix.length;
        count += oneToOneHundred;
        count += 99 * `${hundredsPrefix}and`.length;
    }

    // 1000
    count += "onethousand".length;

    return count;
}


console.log(countLettersTo1000());
