import { isPrime } from "../../utils.js";

/**
 * Calculate the diagonal numbers for a given sized spiral.
 * @param size - The size of the spiral.
 * @returns An array of diagonal numbers.
 */
const diagonals = (size: number): number[] => {
    const diags: number[] = [1];

    for (let i = 3; i <= size; i += 2) {
        const lastDiag = diags[diags.length - 1]!;
        const step = i - 1;

        diags.push(lastDiag + step, lastDiag + step * 2, lastDiag + step * 3, lastDiag + step * 4);
    }

    return diags.slice(1);
};

let solution = NaN;

for (let i = 1; isNaN(solution); i += 2) {
    const diags = diagonals(i);

    const primeDiagonals = diags.filter(isPrime);
    const ratio = primeDiagonals.length / diags.length;

    if (ratio <= 0.1)
        solution = i;
}

export default solution;
