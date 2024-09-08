import { permutations } from "../../utils.js";

const products = new Set<number>();

permutations([1, 2, 3, 4, 5, 6, 7, 8, 9]).forEach((permutation) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const string = permutation.join("");
            const int1 = parseInt(string.slice(0, i), 10);
            const int2 = parseInt(string.slice(i, j), 10);
            const int3 = parseInt(string.slice(j, string.length), 10);

            if (int1 * int2 === int3)
                products.add(int3);
        }
    }
});

export default [...products].reduce((a, b) => a + b);
