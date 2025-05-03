let num0 = 1n;
let num1 = 3n;
let den1 = 2n;

let count = 0;

for (let i = 0; i < 1000; i++) {
    const num2 = 2n * num1 + num0;
    const den2 = num1 + den1;

    num0 = num1;
    num1 = num2;
    den1 = den2;

    if (num2.toString().length > den2.toString().length)
        count++;
}

export default count;
