let sqrSum = 0;
let sumSqr = 0;
let diff = 0;

for (let i = 100; i > 0; i--) {
    sqrSum += i * i;
    sumSqr += i;
}
sumSqr *= sumSqr;

diff = sumSqr - sqrSum;
console.log(diff);
