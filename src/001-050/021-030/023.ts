import { isAbundant, range, sum } from "../../utils.js";

// All numbers larger can be expressed as the sum of 2 abundant numbers.
const upperLimit = 28123;
const abundant = range(upperLimit).filter(isAbundant);

const abundantSums = new Set<number>();

for (const i of abundant) {
    for (const j of abundant)
        abundantSums.add(i + j);
}

export default sum(range(upperLimit).filter((i) => !abundantSums.has(i)));
