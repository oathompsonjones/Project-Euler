# Project Euler

[Project Euler](https://projecteuler.net) is a website which is full of puzzles which can be solved by programming.

This repository contains my solutions to each problem. These solutions may not all be the most efficient.

<details>
    <summary>Problem 1</summary>
    <p>```js
    // src/1-50/1-10/1.js
    
    let sum = 0;
    for (let i = 1; i < 1000; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    console.log(sum);
    ```</p>
</details>