const { isPrime } = require("../../Utils/utils");

let sum = 0;
for (let i = 2; i < 2000000; i++) {
    if (isPrime(i))
        sum += i;
}
console.log(sum);
