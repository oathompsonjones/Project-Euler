const digits = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

const getPermutaions = () => {
    const permutations = [];
    const usedChars = [];

    const permute = (input) => {
        for (let i = 0; i < input.length; i++) {
            let char = input.splice(i, 1)[ 0 ];
            usedChars.push(char);
            if (input.length == 0) {
                permutations.push(usedChars.slice());
            }
            permute(input);
            input.splice(i, 0, char);
            usedChars.pop();
        }
        return permutations;
    };

    return permute(digits);
};

console.log(getPermutaions()[ 1000000 - 1 ].join(""));