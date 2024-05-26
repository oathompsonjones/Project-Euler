const arr = [];
let newNum;

for (let i = 999; i > 100; i--) {
    for (let j = 999; j > 100; j--) {
        newNum = i * j;
        const reversedNumString = newNum.toString().split("")
            .reverse()
            .join("");

        if (newNum.toString() === reversedNumString)
            arr.push(newNum);
    }
}

console.log(Math.max(...arr));
