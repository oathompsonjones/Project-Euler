import { arePermutations, digits, isPrime } from "../../utils.js";

let finalTerms: number[] = [];

for (let i = 1e3; i < 1e4; i++) {
    if (!isPrime(i))
        continue;

    const terms = [i];

    for (let j = 1; j < 3334; j++) {
        if (!isPrime(i + j) || !isPrime(i + j + j))
            continue;

        if (!arePermutations(digits(i), digits(i + j)) || !arePermutations(digits(i), digits(i + j + j)))
            continue;

        terms.push(i + j, i + j + j);
    }

    if (terms.length === 3)
        finalTerms = terms;
}

export default parseInt(finalTerms.map((x) => x.toString()).join(""), 10);
