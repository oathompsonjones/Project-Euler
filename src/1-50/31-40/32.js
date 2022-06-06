const permutations = ((input) => {
    const permArr = [];
    const usedChars = [];

    const permute = (input) => {
        let ch;
        for (let i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[ 0 ];
            usedChars.push(ch);
            if (input.length === 0) permArr.push(usedChars.slice());
            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    };

    return permute(input);
})([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);

const products = [];
permutations.forEach((permutation) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const string = permutation.map(a => a.toString()).join("");
            const int1 = parseInt(string.slice(0, i));
            const int2 = parseInt(string.slice(i, j));
            const int3 = parseInt(string.slice(j, string.length));
            if (int1 * int2 === int3) products.push(int3);
        }
    }
});

console.log([ ...new Set(products) ].reduce((a, b) => a + b));