const { isPrime, arePermutations } = require("../../Utils/utils");

let finalTerms = [];
for (let i = 1000; i < 10000; i++) {
    if (!isPrime(i)) continue;
    const terms = [ i ];
    for (let j = 1; j < 3334; j++) {
        if (!isPrime(i + j) || !isPrime(i + j + j)) continue;
        if (!arePermutations(i, i + j) || !arePermutations(i, i + j + j)) continue;
        terms.push(i + j, i + j + j);
    }
    if (terms.length === 3)
        finalTerms = terms;
}
console.log(finalTerms.map((x) => x.toString()).join(""));