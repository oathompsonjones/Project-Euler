let arr = [];
let newNum;

for (let i = 999; i > 100; i--) {
    for (let j = 999; j > 100; j--) {
        newNum = i * j;
        if (newNum.toString() === newNum.toString().split("").reverse().join("")) {
            arr.push(newNum);
        }
    }
}

console.log(Math.max.apply(Math, arr));