let num = 600851475143;
const sqrtNum = Math.sqrt(num);
let answer;

for (let i = 2; i <= sqrtNum; i++) {
    while (num % i === 0) {
        answer = i;
        num /= i;
    }
}

console.log(answer);
