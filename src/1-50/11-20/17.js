let baseNumbers = [ "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

let teens = [ "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];

let baseTens = [ "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];

function countLettersCountingToOneThousand() {
    let count = 0;

    //1-9
    for (let i = 0; i < baseNumbers.length; i++) {
        let baseNumber = baseNumbers[ i ];
        count += baseNumber.length;
    }

    //10-19
    for (let i = 0; i < teens.length; i++) {
        let teen = teens[ i ];
        count += teen.length;
    }

    //20-99
    for (let i = 0; i < baseTens.length; i++) {
        let baseTen = baseTens[ i ];
        for (let j = 0; j < baseNumbers.length; j++) {
            let baseNumber = baseNumbers[ j ];
            count += baseTen.length + baseNumber.length;
        }
    }

    let oneToOneHundred = count;

    //100-999
    for (let i = 1; i < baseNumbers.length; i++) {
        let hundredsPrefix = baseNumbers[ i ] + "hundred";

        count += hundredsPrefix.length;
        count += oneToOneHundred;
        count += 99 * (hundredsPrefix + "and").length;
    }

    //1000
    count += "onethousand".length;

    return count;
};


console.log(countLettersCountingToOneThousand());