import { digits, sum } from "../../utils.js";

const numbers = [];

for (let i = 10; i < 1e6; i++) {
    if (i === sum(digits(i).map((j) => j ** 5)))
        numbers.push(i);
}

export default sum(numbers);
