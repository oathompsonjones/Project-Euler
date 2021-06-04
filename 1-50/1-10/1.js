let loop = 1;
let numArr = [];
let total = 0;
while (loop < 1000) {
    if ((loop % 3 === 0) || (loop % 5 === 0)) {
        numArr.push(loop);
    }
    loop++;
}

numArr.forEach(num => {
    total += num;
});

console.log(total);