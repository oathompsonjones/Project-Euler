let a = 1;
let b = 0;
let temp;
const numArr = [];
let total = 0;

while (a < 4e6) {
    temp = a;
    a += b;
    b = temp;

    if (b % 2 === 0)
        numArr.push(b);
}

numArr.forEach((num) => {
    total += num;
});

export default total;
