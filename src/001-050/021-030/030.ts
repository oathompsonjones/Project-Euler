import { sum } from "../../utils.js";

const numbers = [];

for (let i = 10; i < 1e6; i++) {
    if (i === sum(i.toString().split("").map((j) => Number(j) ** 5)))
        numbers.push(i);
}

console.log(numbers);

export default sum(numbers);
