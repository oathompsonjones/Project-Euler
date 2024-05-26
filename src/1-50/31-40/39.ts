function pythagoreanTriples(total: number): number[][] {
    const triples = [];

    for (let a = 1; a < total / 2; a++) {
        for (let b = 1; b < total / 2; b++) {
            for (let c = 1; c < total / 2; c++) {
                if (a * a + b * b === c * c)
                    triples.push([a, b, c]);
            }
        }
    }

    return [...new Set(triples.map((triple) => triple.sort((a, b) => a - b)))]
        .filter((triple) => triple.reduce((a, b) => a + b) === total);
}

let maxSolutionsP = 0;
let maxSolutions = 0;

for (let i = 0; i <= 1000; i++) {
    const solutions = pythagoreanTriples(i);

    if (solutions.length > maxSolutions) {
        maxSolutions = solutions.length;
        maxSolutionsP = i;
    }
}
console.log(maxSolutionsP);
