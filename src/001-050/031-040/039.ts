const pythagoreanTriples = (total: number): number[][] => {
    const triples = [];

    for (let a = 1; a < total / 2; a++) {
        for (let b = a; b < total / 2; b++) {
            for (let c = b; c < total / 2; c++) {
                if (a * a + b * b === c * c && a + b + c === total)
                    triples.push([a, b, c]);
            }
        }
    }

    return triples;
};

let maxSolutionsP = 0;
let maxSolutions = 0;

for (let i = 0; i <= 1000; i++) {
    const solutions = pythagoreanTriples(i);

    if (solutions.length > maxSolutions) {
        maxSolutions = solutions.length;
        maxSolutionsP = i;
    }
}

export default maxSolutionsP;
