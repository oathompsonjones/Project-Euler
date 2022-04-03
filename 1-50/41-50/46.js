const { isPrime } = require("../../Utils/utils");

let result = null;

for (let i = 9; result === null; i += 2) {
    if (isPrime(i)) continue;
    for (let j = 1; j < Math.sqrt(i); j++) {
        if (isPrime(i - 2 * j * j)) {
            result = null;
            break;
        } else
            result = i;
    }
}

console.log(result);