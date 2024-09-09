import { isPallindrome } from "../../utils.js";

const arr = [];
let newNum;

for (let i = 999; i > 100; i--) {
    for (let j = 999; j > 100; j--) {
        newNum = i * j;

        if (isPallindrome(newNum))
            arr.push(newNum);
    }
}

export default Math.max(...arr);
