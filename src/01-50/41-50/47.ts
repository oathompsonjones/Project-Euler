import { primeFactors } from "../../Utils/utils.js";

const COUNT = 4;
let consecutiveCount = 0;

let i = 0;

for (; consecutiveCount < COUNT; i++) {
    if (primeFactors(i).length === COUNT)
        consecutiveCount++;
    else
        consecutiveCount = 0;
}

export default i - COUNT;
