const permutations: number[][] = ((input): number[][] => {
    const permArr: number[][] = [];
    const usedChars: number[] = [];

    function permute(inp: number[]): number[][] {
        let ch;

        for (let i = 0; i < inp.length; i++) {
            ch = inp.splice(i, 1)[0]!;
            usedChars.push(ch);

            if (inp.length === 0)
                permArr.push(usedChars.slice());

            permute(inp);
            inp.splice(i, 0, ch);
            usedChars.pop();
        }

        return permArr;
    }

    return permute(input);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const products: number[] = [];

permutations.forEach((permutation) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const string = permutation.map((a) => a.toString()).join("");
            const int1 = parseInt(string.slice(0, i), 10);
            const int2 = parseInt(string.slice(i, j), 10);
            const int3 = parseInt(string.slice(j, string.length), 10);

            if (int1 * int2 === int3)
                products.push(int3);
        }
    }
});

export default [...new Set(products)].reduce((a, b) => a + b);
