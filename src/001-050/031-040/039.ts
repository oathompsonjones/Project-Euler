let maxSolutionsP = 0;
let maxSolutions = 0;

for (let i = 0; i <= 1000; i++) {
    const triples = [];

    for (let a = 1; a < i / 2; a++) {
        for (let b = a; b < i / 2; b++) {
            for (let c = b; c < i / 2; c++) {
                if (a * a + b * b === c * c && a + b + c === i)
                    triples.push([a, b, c]);
            }
        }
    }

    if (triples.length > maxSolutions) {
        maxSolutions = triples.length;
        maxSolutionsP = i;
    }
}

export default maxSolutionsP;
