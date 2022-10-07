# Project Euler
[Project Euler](https://projecteuler.net) is a website which is full of puzzles which can help develop programming skills.
This repository contains my solutions to each problem. These solutions may not all be the most efficient.
## Contents
- [Utils](#utils)
- [Problems 1-50](#problems-1-50)
	- [Problems 1-10](#problems-1-10)
		- [Problem 1.js](#problem-1js)
		- [Problem 2.js](#problem-2js)
		- [Problem 3.js](#problem-3js)
		- [Problem 4.js](#problem-4js)
		- [Problem 5.js](#problem-5js)
		- [Problem 6.js](#problem-6js)
		- [Problem 7.js](#problem-7js)
		- [Problem 8.js](#problem-8js)
		- [Problem 9.js](#problem-9js)
		- [Problem 10.js](#problem-10js)
	- [Problems 11-20](#problems-11-20)
		- [Problem 11.js](#problem-11js)
		- [Problem 12.js](#problem-12js)
		- [Problem 13.js](#problem-13js)
		- [Problem 14.js](#problem-14js)
		- [Problem 15.js](#problem-15js)
		- [Problem 16.js](#problem-16js)
		- [Problem 17.js](#problem-17js)
		- [Problem 18.js](#problem-18js)
		- [Problem 19.js](#problem-19js)
		- [Problem 20.js](#problem-20js)
	- [Problems 21-30](#problems-21-30)
		- [Problem 21.js](#problem-21js)
		- [Problem 22.js](#problem-22js)
		- [Problem 23.js](#problem-23js)
		- [Problem 24.js](#problem-24js)
		- [Problem 25.js](#problem-25js)
		- [Problem 26.js](#problem-26js)
		- [Problem 27.js](#problem-27js)
		- [Problem 28.js](#problem-28js)
		- [Problem 29.js](#problem-29js)
		- [Problem 30.js](#problem-30js)
	- [Problems 31-40](#problems-31-40)
		- [Problem 31.js](#problem-31js)
		- [Problem 32.js](#problem-32js)
		- [Problem 33.js](#problem-33js)
		- [Problem 34.js](#problem-34js)
		- [Problem 35.js](#problem-35js)
		- [Problem 36.js](#problem-36js)
		- [Problem 37.js](#problem-37js)
		- [Problem 38.js](#problem-38js)
		- [Problem 39.js](#problem-39js)
		- [Problem 40.js](#problem-40js)
	- [Problems 41-50](#problems-41-50)
		- [Problem 41.js](#problem-41js)
		- [Problem 42.js](#problem-42js)
		- [Problem 43.js](#problem-43js)
		- [Problem 44.js](#problem-44js)
		- [Problem 45.js](#problem-45js)
		- [Problem 46.js](#problem-46js)
		- [Problem 47.js](#problem-47js)
		- [Problem 48.js](#problem-48js)
		- [Problem 49.js](#problem-49js)

## Utils
A series of utility functions which come in handy for several problems.

```js
// src/Utils/utils.js

const range = (start, end) => Array(end - start + 1).fill(0).map((_, i) => start + i);
const map = (x, inMin, inMax, outMin, outMax) => ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
const factorial = (n) => Array(n).fill(0).map((_, i) => i + 1).reduce((a, b) => a * b, 1);
const triangular = (n) => n * (n + 1) / 2;
const isTriangular = (n) => {
    if (n < 0)
        return false;
    let sum = 0;
    for (let i = 1; sum <= n; i++) {
        sum += i;
        if (sum === n)
            return true;
    }
    return false;
};
const pentagonal = (n) => n * (3 * n - 1) / 2;
const isPentagonal = (n) => {
    let i = 1, m;
    do m = pentagonal(i++);
    while (m < n);
    return m === n;
};
const hexagonal = (n) => n * (2 * n - 1);
const isHexagonal = (n) => {
    const x = (1 + Math.sqrt(8 * n + 1)) / 4;
    return (x - parseInt(x)) == 0;
};
const isPrime = (num) => {
    if (num <= 1)
        return false;
    else if (num <= 3)
        return true;
    else if (num % 2 === 0 || num % 3 === 0)
        return false;
    for (let i = 5; i * i <= num; i += 6)
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    return true;
};
const isPandigital = (n) => Array(Math.min(n.toString().length, 9)).fill(0).map((_, i) => i + 1).every((d) => n.toString().includes(d));
const swap = (array1, index1, index2) => {
    let temp = array1[ index1 ];
    array1[ index1 ] = array1[ index2 ];
    array1[ index2 ] = temp;
};
const permutations = (a) => {
    let r = a.length - 1;
    let l = 0;
    const output = [];
    const permute = (a, l, r) => {
        if (l == r) output.push(a.join(""));
        else for (let i = l; i <= r; i++) {
            swap(a, l, i);
            permute(a, l + 1, r);
            swap(a, l, i);
        }
    };
    permute(a, l, r);
    return output;
};
const factors = (n) => {
    const arr = [];
    let max = n;
    for (let i = 1; i < max; i++) {
        if (n % i === 0) {
            arr.push(i);
            let k = n / i;
            if (i !== k)
                arr.push(k);
            max = k;
        }
    }
    return arr.sort((a, b) => a - b);
};
const howPerfect = (n) => {
    let d = 0;
    for (let i = Math.floor(n / 2); i > 0; i--)
        if (n % i === 0) d += i;
    if (d === n) return "PERFECT";
    else if (d < n) return "DEFICIENT";
    else return "ABUNDANT";
};
const isPerfect = (num) => howPerfect(num) === "PERFECT";
const isAbundant = (num) => howPerfect(num) === "ABUNDANT";
const isDeficient = (num) => howPerfect(num) === "DEFICIENT";
const primeFactors = (n) => {
    const factors = [];
    for (let divisor = 2; n >= 2;) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n /= divisor;
        }
        else divisor++;
    }
    return [ ... new Set(factors) ];
};
const arePermutations = (x, y) => {
    const xDigits = x.toString().split("").map(Number);
    let yDigits = y.toString().split("").map(Number);
    if (xDigits.length !== yDigits.length)
        return false;
    for (const digit of xDigits) {
        let index;
        if ((index = yDigits.indexOf(digit)) === -1)
            return false;
        else
            yDigits = yDigits.filter((_, i) => i !== index);
    }
    return true;
};

const readFile = (path) => {
    const fs = require("fs");
    return fs.readFileSync(path, { encoding: "utf8" });
};

module.exports = {
    range,
    map,
    factorial,
    triangular,
    isTriangular,
    pentagonal,
    isPentagonal,
    hexagonal,
    isHexagonal,
    isPrime,
    isPandigital,
    swap,
    permutations,
    factors,
    isPerfect,
    isAbundant,
    isDeficient,
    primeFactors,
    arePermutations,
    readFile
};
```

## Problems 1-50
### Problems 1-10
#### Problem 1.js
```js
// src/1-50/1-10/1.js

let sum = 0;
for (let i = 1; i < 1000; i++)
    if (i % 3 === 0 || i % 5 === 0)
        sum += i;
console.log(sum);
```
#### Problem 2.js
```js
// src/1-50/1-10/2.js

let a = 1
let b = 0
let temp;
let numArr = [];
let total = 0;

while (a < 4000000) {
    temp = a;
    a = a + b;
    b = temp;
    if (b % 2 === 0) {
        numArr.push(b);
    }
}

numArr.forEach(num => {
    total += num;
});

console.log(total);
```
#### Problem 3.js
```js
// src/1-50/1-10/3.js

let num = 600851475143;
let sqrtNum = Math.sqrt(num);
let answer;

for (let i = 2; i <= sqrtNum; i++) {
    while (num % i === 0) {
        answer = i;
        num /= i;
    }
}

console.log(answer);
```
#### Problem 4.js
```js
// src/1-50/1-10/4.js

let arr = [];
let newNum;

for (let i = 999; i > 100; i--) {
    for (let j = 999; j > 100; j--) {
        newNum = i * j;
        if (newNum.toString() === newNum.toString().split("").reverse().join(""))
            arr.push(newNum);
    }
}

console.log(Math.max.apply(Math, arr));
```
#### Problem 5.js
```js
// src/1-50/1-10/5.js

let num = 1;
let result = null;

while (result === null) {
    if (
        (num % 1 === 0) &&
        (num % 2 === 0) &&
        (num % 3 === 0) &&
        (num % 4 === 0) &&
        (num % 5 === 0) &&
        (num % 6 === 0) &&
        (num % 7 === 0) &&
        (num % 8 === 0) &&
        (num % 9 === 0) &&
        (num % 10 === 0) &&
        (num % 11 === 0) &&
        (num % 12 === 0) &&
        (num % 13 === 0) &&
        (num % 14 === 0) &&
        (num % 15 === 0) &&
        (num % 16 === 0) &&
        (num % 17 === 0) &&
        (num % 18 === 0) &&
        (num % 19 === 0) &&
        (num % 20 === 0)
    ) result = num;
    num++;
}

console.log(result);
```
#### Problem 6.js
```js
// src/1-50/1-10/6.js

let sqrSum = 0;
let sumSqr = 0;
let diff = 0;

for (let i = 100; i > 0; i--) {
    sqrSum += i * i;
    sumSqr += i;
}
sumSqr = sumSqr * sumSqr;

diff = sumSqr - sqrSum;
console.log(diff);
```
#### Problem 7.js
```js
// src/1-50/1-10/7.js

let primes = [ 2 ];
for (let i = 3; primes.length <= 10001; i += 2) {
    if (primes.every(v => i % v !== 0)) {
        primes.push(i);
        if (primes.length === 10001)
            console.log(i);
    }
}
```
#### Problem 8.js
```js
// src/1-50/1-10/8.js

let num = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
num = num.split("").map((i) => parseInt(i));
let largest = 0;

for (let i = 1; i < 1000; i++) {
    const product = Object.keys(new Array(13).fill(0)).map((j) => num[ i + parseInt(j) ]).reduce((a, b) => a * b);
    if (!isNaN(product))
        largest = Math.max(product, largest);
}
console.log(largest);
```
#### Problem 9.js
```js
// src/1-50/1-10/9.js

let arrPythag = [];
for (let i = 1; i <= 1000; i++)
    arrPythag.push(i);
let allTriplets = [];
for (let i = 0; i < arrPythag.length; i++) {
    for (let k = 0; k < arrPythag.length; k++) {
        for (let p = 0; p < arrPythag.length; p++) {
            let aSquared = Math.pow(arrPythag[ i ], 2);
            let bSquared = Math.pow(arrPythag[ k ], 2);
            let cSquared = Math.pow(arrPythag[ p ], 2);
            if (aSquared + bSquared == cSquared && arrPythag[ i ] + arrPythag[ k ] + arrPythag[ p ] == 1000)
                allTriplets.push([ arrPythag[ i ], arrPythag[ k ], arrPythag[ p ] ]);
        }
    }
}
let product = allTriplets[ 0 ][ 0 ] * allTriplets[ 0 ][ 1 ] * allTriplets[ 0 ][ 2 ];
console.log(product);
```
#### Problem 10.js
```js
// src/1-50/1-10/10.js

const { isPrime } = require("../../Utils/utils");

let sum = 0;
for (let i = 2; i < 2000000; i++)
    if (isPrime(i))
        sum += i;
console.log(sum);
```
### Problems 11-20
#### Problem 11.js
```js
// src/1-50/11-20/11.js

const GRID = [
    [ 08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08 ],
    [ 49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00 ],
    [ 81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65 ],
    [ 52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91 ],
    [ 22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80 ],
    [ 24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50 ],
    [ 32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70 ],
    [ 67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21 ],
    [ 24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72 ],
    [ 21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95 ],
    [ 78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92 ],
    [ 16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57 ],
    [ 86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58 ],
    [ 19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40 ],
    [ 04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66 ],
    [ 88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69 ],
    [ 04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36 ],
    [ 20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16 ],
    [ 20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54 ],
    [ 01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48 ]
];
let NUM = 4;
let product = 0;
for (var i = NUM - 1; i < (GRID.length - NUM); i++) {
    for (var k = NUM - 1; k < (GRID.length - NUM); k++) {
        product = Math.max(
            product,

            // TOP ROW
            (GRID[ i - 3 ][ k - 3 ] * GRID[ i - 2 ][ k - 2 ] * GRID[ i - 1 ][ k - 1 ] * GRID[ i ][ k ]), // LT
            (GRID[ i - 3 ][ k ] * GRID[ i - 2 ][ k ] * GRID[ i - 1 ][ k ] * GRID[ i ][ k ]), // MT
            (GRID[ i - 3 ][ k + 3 ] * GRID[ i - 2 ][ k + 2 ] * GRID[ i - 1 ][ k + 1 ] * GRID[ i ][ k ]), // RT

            // MIDDLE ROW
            (GRID[ i ][ k - 3 ] * GRID[ i ][ k - 2 ] * GRID[ i ][ k - 1 ] * GRID[ i ][ k ]), // LM
            (GRID[ i ][ k + 3 ] * GRID[ i ][ k + 2 ] * GRID[ i ][ k + 1 ] * GRID[ i ][ k ]), // RM

            // BOTTOM ROW
            (GRID[ i + 3 ][ k - 3 ] * GRID[ i + 2 ][ k - 2 ] * GRID[ i + 1 ][ k + 1 ] * GRID[ i ][ k ]), // LB
            (GRID[ i + 3 ][ k ] * GRID[ i + 2 ][ k ] * GRID[ i + 1 ][ k ] * GRID[ i ][ k ]), // MB
            (GRID[ i + 3 ][ k + 3 ] * GRID[ i + 2 ][ k + 2 ] * GRID[ i + 1 ][ k + 1 ] * GRID[ i ][ k ]) // RB
        );
    }
}
console.log(product);
```
#### Problem 12.js
```js
// src/1-50/11-20/12.js

const { factors } = require("../../Utils/utils");

let x = 0, y = 1;

while (factors(x).length <= 500)
    x += y++;

console.log(x);
```
#### Problem 13.js
```js
// src/1-50/11-20/13.js

const num = "37107287533902102798797998220837590246510135740250\n"
    + "46376937677490009712648124896970078050417018260538\n"
    + "74324986199524741059474233309513058123726617309629\n"
    + "91942213363574161572522430563301811072406154908250\n"
    + "23067588207539346171171980310421047513778063246676\n"
    + "89261670696623633820136378418383684178734361726757\n"
    + "28112879812849979408065481931592621691275889832738\n"
    + "44274228917432520321923589422876796487670272189318\n"
    + "47451445736001306439091167216856844588711603153276\n"
    + "70386486105843025439939619828917593665686757934951\n"
    + "62176457141856560629502157223196586755079324193331\n"
    + "64906352462741904929101432445813822663347944758178\n"
    + "92575867718337217661963751590579239728245598838407\n"
    + "58203565325359399008402633568948830189458628227828\n"
    + "80181199384826282014278194139940567587151170094390\n"
    + "35398664372827112653829987240784473053190104293586\n"
    + "86515506006295864861532075273371959191420517255829\n"
    + "71693888707715466499115593487603532921714970056938\n"
    + "54370070576826684624621495650076471787294438377604\n"
    + "53282654108756828443191190634694037855217779295145\n"
    + "36123272525000296071075082563815656710885258350721\n"
    + "45876576172410976447339110607218265236877223636045\n"
    + "17423706905851860660448207621209813287860733969412\n"
    + "81142660418086830619328460811191061556940512689692\n"
    + "51934325451728388641918047049293215058642563049483\n"
    + "62467221648435076201727918039944693004732956340691\n"
    + "15732444386908125794514089057706229429197107928209\n"
    + "55037687525678773091862540744969844508330393682126\n"
    + "18336384825330154686196124348767681297534375946515\n"
    + "80386287592878490201521685554828717201219257766954\n"
    + "78182833757993103614740356856449095527097864797581\n"
    + "16726320100436897842553539920931837441497806860984\n"
    + "48403098129077791799088218795327364475675590848030\n"
    + "87086987551392711854517078544161852424320693150332\n"
    + "59959406895756536782107074926966537676326235447210\n"
    + "69793950679652694742597709739166693763042633987085\n"
    + "41052684708299085211399427365734116182760315001271\n"
    + "65378607361501080857009149939512557028198746004375\n"
    + "35829035317434717326932123578154982629742552737307\n"
    + "94953759765105305946966067683156574377167401875275\n"
    + "88902802571733229619176668713819931811048770190271\n"
    + "25267680276078003013678680992525463401061632866526\n"
    + "36270218540497705585629946580636237993140746255962\n"
    + "24074486908231174977792365466257246923322810917141\n"
    + "91430288197103288597806669760892938638285025333403\n"
    + "34413065578016127815921815005561868836468420090470\n"
    + "23053081172816430487623791969842487255036638784583\n"
    + "11487696932154902810424020138335124462181441773470\n"
    + "63783299490636259666498587618221225225512486764533\n"
    + "67720186971698544312419572409913959008952310058822\n"
    + "95548255300263520781532296796249481641953868218774\n"
    + "76085327132285723110424803456124867697064507995236\n"
    + "37774242535411291684276865538926205024910326572967\n"
    + "23701913275725675285653248258265463092207058596522\n"
    + "29798860272258331913126375147341994889534765745501\n"
    + "18495701454879288984856827726077713721403798879715\n"
    + "38298203783031473527721580348144513491373226651381\n"
    + "34829543829199918180278916522431027392251122869539\n"
    + "40957953066405232632538044100059654939159879593635\n"
    + "29746152185502371307642255121183693803580388584903\n"
    + "41698116222072977186158236678424689157993532961922\n"
    + "62467957194401269043877107275048102390895523597457\n"
    + "23189706772547915061505504953922979530901129967519\n"
    + "86188088225875314529584099251203829009407770775672\n"
    + "11306739708304724483816533873502340845647058077308\n"
    + "82959174767140363198008187129011875491310547126581\n"
    + "97623331044818386269515456334926366572897563400500\n"
    + "42846280183517070527831839425882145521227251250327\n"
    + "55121603546981200581762165212827652751691296897789\n"
    + "32238195734329339946437501907836945765883352399886\n"
    + "75506164965184775180738168837861091527357929701337\n"
    + "62177842752192623401942399639168044983993173312731\n"
    + "32924185707147349566916674687634660915035914677504\n"
    + "99518671430235219628894890102423325116913619626622\n"
    + "73267460800591547471830798392868535206946944540724\n"
    + "76841822524674417161514036427982273348055556214818\n"
    + "97142617910342598647204516893989422179826088076852\n"
    + "87783646182799346313767754307809363333018982642090\n"
    + "10848802521674670883215120185883543223812876952786\n"
    + "71329612474782464538636993009049310363619763878039\n"
    + "62184073572399794223406235393808339651327408011116\n"
    + "66627891981488087797941876876144230030984490851411\n"
    + "60661826293682836764744779239180335110989069790714\n"
    + "85786944089552990653640447425576083659976645795096\n"
    + "66024396409905389607120198219976047599490197230297\n"
    + "64913982680032973156037120041377903785566085089252\n"
    + "16730939319872750275468906903707539413042652315011\n"
    + "94809377245048795150954100921645863754710598436791\n"
    + "78639167021187492431995700641917969777599028300699\n"
    + "15368713711936614952811305876380278410754449733078\n"
    + "40789923115535562561142322423255033685442488917353\n"
    + "44889911501440648020369068063960672322193204149535\n"
    + "41503128880339536053299340368006977710650566631954\n"
    + "81234880673210146739058568557934581403627822703280\n"
    + "82616570773948327592232845941706525094512325230608\n"
    + "22918802058777319719839450180888072429661980811197\n"
    + "77158542502016545090413245809786882778948721859617\n"
    + "72107838435069186155435662884062257473692284509516\n"
    + "20849603980134001723930671666823555245252804609722\n"
    + "53503534226472524250874054075591789781264330331690";
let sum = 0;
num.split("\n").forEach(number => sum += parseInt(number, 10));
console.log(sum.toString().replace(".", "").slice(0, 10));
```
#### Problem 14.js
```js
// src/1-50/11-20/14.js

function sequence(num) {
    let sequence = [];
    while (num !== 1) {
        sequence.push(num);
        if ((num % 2) === 0) {
            num = num / 2;
        } else {
            num = (num * 3) + 1;
        }
    }
    return sequence;
}

let longestSequenceLength = 0;
let longestSequenceNumber = 0;
for (let i = 1; i < 1000000; i++) {
    let temp = sequence(i);
    if (temp.length > longestSequenceLength) {
        longestSequenceLength = temp.length;
        longestSequenceNumber = i;
    }
}

console.log(longestSequenceNumber);
```
#### Problem 15.js
```js
// src/1-50/11-20/15.js

let numRoutes = [];

function getNumRoutes(sizeX, sizeY) {
    numRoutes[ sizeX ] = numRoutes[ sizeX ] || [];

    if (numRoutes[ sizeX ][ sizeY ])
        return numRoutes[ sizeX ][ sizeY ];
    if (sizeX == 0 || sizeY == 0)
        return 1;

    let routes = getNumRoutes(sizeX - 1, sizeY);
    routes += getNumRoutes(sizeX, sizeY - 1);

    numRoutes[ sizeX ][ sizeY ] = routes;

    return routes;
};

console.log(getNumRoutes(20, 20));
```
#### Problem 16.js
```js
// src/1-50/11-20/16.js

let number = [ 1 ];
let sum = 0;
for (let i = 0; i < 1000; i++) {
    let overflow = 0;
    let count = number.length + 1;
    for (let j = 0; j < count; j++) {
        let digit = number[ j ] || 0;
        digit = 2 * digit + overflow;
        if (digit > 9) {
            digit -= 10;
            overflow = 1;
        } else overflow = 0;
        number[ j ] = digit;
    }
}
for (let i = 0; i < 1000; i++)
    sum += number[ i ];
console.log(sum);
```
#### Problem 17.js
```js
// src/1-50/11-20/17.js

let baseNumbers = [ "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

let teens = [ "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];

let baseTens = [ "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];

function countLettersCountingToOneThousand() {
    let count = 0;

    //1-9
    for (let i = 0; i < baseNumbers.length; i++) {
        let baseNumber = baseNumbers[ i ];
        count += baseNumber.length;
    }

    //10-19
    for (let i = 0; i < teens.length; i++) {
        let teen = teens[ i ];
        count += teen.length;
    }

    //20-99
    for (let i = 0; i < baseTens.length; i++) {
        let baseTen = baseTens[ i ];
        for (let j = 0; j < baseNumbers.length; j++) {
            let baseNumber = baseNumbers[ j ];
            count += baseTen.length + baseNumber.length;
        }
    }

    let oneToOneHundred = count;

    //100-999
    for (let i = 1; i < baseNumbers.length; i++) {
        let hundredsPrefix = baseNumbers[ i ] + "hundred";

        count += hundredsPrefix.length;
        count += oneToOneHundred;
        count += 99 * (hundredsPrefix + "and").length;
    }

    //1000
    count += "onethousand".length;

    return count;
};


console.log(countLettersCountingToOneThousand());
```
#### Problem 18.js
```js
// src/1-50/11-20/18.js

const test = [ "3", "7 4", "2 4 6", "8 5 9 3" ];

const triangle = [
    "75",
    "95 64",
    "17 47 82",
    "18 35 87 10",
    "20 04 82 47 65",
    "19 01 23 75 03 34",
    "88 02 77 73 07 63 67",
    "99 65 04 28 06 16 70 92",
    "41 41 26 56 83 40 80 70 33",
    "41 48 72 33 47 32 37 16 94 29",
    "53 71 44 65 25 43 91 52 97 51 14",
    "70 11 33 28 77 73 17 78 39 68 17 57",
    "91 71 52 38 17 14 91 43 58 50 27 29 48",
    "63 66 04 68 89 53 67 30 73 16 69 87 40 31",
    "04 62 98 27 23 09 70 98 73 93 38 53 60 04 23"
];

function prepareNumTriangle(tri) {
    for (let i = 0; i < tri.length; i++) {
        tri[ i ] = tri[ i ].split(" ");
        for (let j = 0; j < tri[ i ].length; j++) tri[ i ][ j ] = parseInt(tri[ i ][ j ]);
    }
}

function collapseTriangleToHighest(numTri) {
    let tmpTri = numTri;
    let botRow = tmpTri[ tmpTri.length - 1 ];
    for (let i = 0; i < tmpTri.length - 1; i++) {
        let checkRow = tmpTri[ tmpTri.length - 2 - i ];
        for (let j = 0; j < checkRow.length; j++) {
            if (botRow[ j ] > botRow[ j + 1 ]) checkRow[ j ] += botRow[ j ];
            else checkRow[ j ] += botRow[ j + 1 ];
        }
        botRow = checkRow;
    }
    return tmpTri[ 0 ][ 0 ];
}

prepareNumTriangle(triangle);
console.log(collapseTriangleToHighest(triangle));
```
#### Problem 19.js
```js
// src/1-50/11-20/19.js

let daysFound = 0;
for (let date = new Date(1901, 0, 1); date <= new Date(2000, 11, 31); date.setDate(date.getDate() + 1))
    if (date.getDay() === 0 && date.getDate() === 1)
        daysFound++;
console.log(daysFound);
```
#### Problem 20.js
```js
// src/1-50/11-20/20.js

let num = "93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000";
let total = 0;
num.split("").forEach((num) => total += parseInt(num));
console.log(total);
```
### Problems 21-30
#### Problem 21.js
```js
// src/1-50/21-30/21.js

const d = (n) => {
    let divisors = [ 0 ];
    for (let i = Math.floor(n / 2); i > 0; i--) if (n % i === 0) divisors.push(i);
    return {
        divisors,
        total: divisors.reduce((a, b) => a + b)
    };
};

let nums = [];
for (let i = 1; i < 10000; i++) {
    const di = d(i).total;
    if (d(di).total === i && i !== d(i).total)
        nums.push(i, d(i).total);
}
nums = [ ...new Set(nums) ];
console.log(nums.reduce((a, b) => a + b));
```
#### Problem 22.js
```js
// src/1-50/21-30/22.js

const { readFile } = require("../../Utils/utils");

const data = readFile("/Users/oathompsonjones/Programming/JS/Project Euler/src/Utils/p022_names.txt");
const names = data.replace(/"/g, "").split(",").sort().map((name) => ({ value: name, ascii: 0, score: 0 }));
names.forEach((name) => {
    for (let i = 0; i < name.value.length; i++) name.ascii += (name.value.charCodeAt(i) - 64);
    name.score = name.ascii * (names.map((name) => name.value).indexOf(name.value) + 1);
});
console.log(names.map((name) => name.score).reduce((a, b) => a + b));
```
#### Problem 23.js
```js
// src/1-50/21-30/23.js

const { isAbundant } = require("../../Utils/utils");

const upperLimit = 28123; // All numbers larger can be expressed as the sum of 2 abundant numbers.
const abundant = Object.keys(new Array(upperLimit).fill(0)).map((i) => parseInt(i)).filter((i) => isAbundant(i));

let abundantSums = [];
for (let i = 0; i < abundant.length; i++)
    for (let j = 0; j < abundant.length; j++)
        abundantSums.push(abundant[ i ] + abundant[ j ]);
abundantSums = [ ...new Set(abundantSums) ];

const notSumOfAbunadant = Object.keys(new Array(upperLimit).fill(0)).map((i) => parseInt(i)).filter((i) => !abundantSums.includes(i));
console.log(notSumOfAbunadant.reduce((a, b) => a + b));
```
#### Problem 24.js
```js
// src/1-50/21-30/24.js

const digits = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

const getPermutaions = () => {
    const permutations = [];
    const usedChars = [];

    const permute = (input) => {
        for (let i = 0; i < input.length; i++) {
            let char = input.splice(i, 1)[ 0 ];
            usedChars.push(char);
            if (input.length == 0) {
                permutations.push(usedChars.slice());
            }
            permute(input);
            input.splice(i, 0, char);
            usedChars.pop();
        }
        return permutations;
    };

    return permute(digits);
};

console.log(getPermutaions()[ 1000000 - 1 ].join(""));
```
#### Problem 25.js
```js
// src/1-50/21-30/25.js

const fibonacciDigits = [ 1n, 1n ];
const fibonacci = () => {
    if (fibonacciDigits[ fibonacciDigits.length - 1 ].toString().length === 1000) return fibonacciDigits;
    fibonacciDigits.push(fibonacciDigits[ fibonacciDigits.length - 1 ] + fibonacciDigits[ fibonacciDigits.length - 2 ]);
    return fibonacci();
};
console.log(fibonacci().length);
```
#### Problem 26.js
```js
// src/1-50/21-30/26.js

const getCycleSize = (num) => {
    let numerator = 1;
    const numerators = [];
    const numeratorDigits = [];

    while (!digitsInSequence) {
        if (numerator == 0) return 0;

        // Check if the numerator is previously repeated
        for (let i = 0; i < numerators.length; i++) {
            if (numerator === numerators[ i ]) {
                var digitsInSequence = 0;
                for (let j = i; j < numerators.length; j++) digitsInSequence += numeratorDigits[ j ];
                return digitsInSequence;
            }
        }

        // Repeat not found, update the numerators and digits
        numerators[ numerators.length ] = numerator;
        let digits = 1;
        while (num > numerator) {
            numerator *= 10;
            digits++;
        }
        numeratorDigits[ numeratorDigits.length ] = digits;
        // Get the next numerator
        numerator %= num;
    }
};

let longestNum = 1;
let largestCycleSize = 1;

for (let currentNum = longestNum + 1; currentNum <= 1000; currentNum++) {
    const cycleSize = getCycleSize(currentNum);

    if (cycleSize > largestCycleSize) {
        largestCycleSize = cycleSize;
        longestNum = currentNum;
    }
}

console.log(longestNum);



```
#### Problem 27.js
```js
// src/1-50/21-30/27.js

const { isPrime } = require("../../Utils/utils");

const newEqu = (a, b, n) => (n * n) + (a * n) + (b);

let N = 0;
let A = 0;
let B = 0;

for (let a = -999; a < 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
        let stillPrime = true;
        let n = 0;
        while (stillPrime) {
            const out = newEqu(a, b, n);
            stillPrime = isPrime(out);
            n++;
        }
        if (n > N) {
            N = n;
            A = a;
            B = b;
        }
    }
}

console.log(A * B);
```
#### Problem 28.js
```js
// src/1-50/21-30/28.js

const corners = [ 1 ];
let currentCorners = [];
let currentDifference = 2;
for (let i = 2; i <= 1001 * 1001; i++) {
    if (i - corners[ corners.length - 1 ] === currentDifference) {
        corners.push(i);
        currentCorners.push(i);
    }
    if (currentCorners.length === 4) {
        currentDifference += 2;
        currentCorners = [];
    }
}

console.log(corners.reduce((a, b) => a + b));
```
#### Problem 29.js
```js
// src/1-50/21-30/29.js

const numbers = [];
for (let a = 2; a <= 100; a++)
    for (let b = 2; b <= 100; b++)
        numbers.push(Math.pow(a, b));
console.log([ ...new Set(numbers) ].length);
```
#### Problem 30.js
```js
// src/1-50/21-30/30.js

const numbers = [];
const digits = (n) => n.toString().split("").map(Number);
for (let i = 10; i < 1000000; i++)
    if (i === digits(i).map((i) => Math.pow(i, 5)).reduce((a, b) => a + b))
        numbers.push(i);
console.log(numbers.reduce((a, b) => a + b));
```
### Problems 31-40
#### Problem 31.js
```js
// src/1-50/31-40/31.js

let ways = 0;
for (let a = 200; a >= 0; a -= 200)
    for (let b = a; b >= 0; b -= 100)
        for (let c = b; c >= 0; c -= 50)
            for (let d = c; d >= 0; d -= 20)
                for (let e = d; e >= 0; e -= 10)
                    for (let f = e; f >= 0; f -= 5)
                        for (let g = f; g >= 0; g -= 2)
                            ways++;
console.log(ways);
```
#### Problem 32.js
```js
// src/1-50/31-40/32.js

const permutations = ((input) => {
    const permArr = [];
    const usedChars = [];

    const permute = (input) => {
        let ch;
        for (let i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[ 0 ];
            usedChars.push(ch);
            if (input.length === 0) permArr.push(usedChars.slice());
            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    };

    return permute(input);
})([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);

const products = [];
permutations.forEach((permutation) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const string = permutation.map(a => a.toString()).join("");
            const int1 = parseInt(string.slice(0, i));
            const int2 = parseInt(string.slice(i, j));
            const int3 = parseInt(string.slice(j, string.length));
            if (int1 * int2 === int3) products.push(int3);
        }
    }
});

console.log([ ...new Set(products) ].reduce((a, b) => a + b));
```
#### Problem 33.js
```js
// src/1-50/31-40/33.js

const results = [];
for (let n = 10; n < 100; n++) {
    for (let d = n + 1; d < 100; d++) {
        const numerator = n.toString().split("");
        const denominator = d.toString().split("");
        const commonDigit = numerator.find(j => j === denominator.find(i => i === numerator[ 0 ] || i === numerator[ 1 ]));
        if (!commonDigit || commonDigit === "0") continue;
        const newNumerator = parseInt(numerator.join("").replace(commonDigit, ""));
        const newDenominator = parseInt(denominator.join("").replace(commonDigit, ""));
        if (n / d === newNumerator / newDenominator) results.push([ n, d ]);
    }
}

const finalNumerator = results.map(i => i[ 0 ]).reduce((a, b) => a * b);
const finalDenominator = results.map(i => i[ 1 ]).reduce((a, b) => a * b);

const HCF = (x, y) => {
    while (Math.max(x, y) % Math.min(x, y) !== 0) x > y ? x %= y : y %= x;
    return Math.min(x, y);
};

console.log(finalDenominator / HCF(finalNumerator, finalDenominator));
```
#### Problem 34.js
```js
// src/1-50/31-40/34.js

const { factorial } = require("../../Utils/utils");
const nums = [];
for (let i = 3; i < 1000000; i++) {
    const digits = i.toString().split("");
    const factorialDigits = digits.map((digit) => factorial(parseInt(digit)));
    const sum = factorialDigits.reduce((a, b) => a + b);
    if (sum === i) nums.push(i);
}
console.log(nums.reduce((a, b) => a + b));
```
#### Problem 35.js
```js
// src/1-50/31-40/35.js

const { isPrime } = require("../../Utils/utils");

const rotations = (n) => {
    const numbers = [];
    let num = n.toString();
    for (let i = 0; i < n.toString().length; i++) {
        numbers.push(num);
        num = `${num.split("")[ num.length - 1 ]}${num.slice(0, num.length - 1)}`;
    }
    return numbers;
};
const primes = Array(1000000).fill(0).map((x, i) => i).filter((i) => isPrime(i));
const allCircularPrimes = primes.filter((prime) => rotations(prime).map((r) => isPrime(r)).every((b) => b));
console.log(allCircularPrimes.length);
```
#### Problem 36.js
```js
// src/1-50/31-40/36.js

const palindromicDecimals = Array(1000000).fill(0).map((x, i) => i.toString()).filter((i) => i.split("").reverse().join("") === i);
const stringToBinary = (str) => parseInt(str).toString(2);
const palindromicDecimalsAsBinary = palindromicDecimals.map(stringToBinary);
const palindromicBinarys = palindromicDecimalsAsBinary.filter((i) => i.split("").reverse().join("") === i);
console.log(palindromicBinarys.map((bin) => parseInt(bin, 2)).reduce((a, b) => a + b));
```
#### Problem 37.js
```js
// src/1-50/31-40/37.js

const { isPrime } = require("../../Utils/utils");

const primes = Array(1e6).fill(0).map((x, i) => i).filter(isPrime);
const truncatableLeftToRight = primes.filter((prime) => {
    let str = prime.toString();
    while (str.length > 1) {
        str = str.slice(1);
        if (!isPrime(parseInt(str))) return false;
    }
    return true;
});
const truncatableBothWays = truncatableLeftToRight.filter((prime) => {
    let str = prime.toString();
    while (str.length > 1) {
        str = str.slice(0, str.length - 1);
        if (!isPrime(parseInt(str))) return false;
    }
    return true;
});
console.log(truncatableBothWays.filter((prime) => prime > 10).reduce((a, b) => a + b));
```
#### Problem 38.js
```js
// src/1-50/31-40/38.js

const getPandigital = (i) => {
    let str = "";
    for (let n = 1; str.length < 9; n++) str += (i * n);
    if (str.length > 9) return NaN;
    for (let j = 1; j <= 9; j++) if (!str.includes(j.toString())) return NaN;
    return parseInt(str);
};
const pandigitals = Array(1e6).fill(0).map((x, i) => getPandigital(i)).filter((i) => !isNaN(i));
console.log(pandigitals.reduce((a, b) => Math.max(a, b)));
```
#### Problem 39.js
```js
// src/1-50/31-40/39.js

const pythagoreanTriples = (total) => {
    const triples = [];
    for (let a = 1; a < total / 2; a++)
        for (let b = 1; b < total / 2; b++)
            for (let c = 1; c < total / 2; c++)
                if (a * a + b * b === c * c) triples.push([ a, b, c ]);
    return [ ...new Set(triples.map((triple) => triple.sort())) ].filter((triple) => triple.reduce((a, b) => a + b) === total);
};
let maxSolutionsP = 0;
let maxSolutions = 0;
for (let i = 0; i <= 1000; i++) {
    const solutions = pythagoreanTriples(i);
    if (solutions.length > maxSolutions) {
        maxSolutions = solutions.length;
        maxSolutionsP = i;
    }
}
console.log(maxSolutionsP);
```
#### Problem 40.js
```js
// src/1-50/31-40/40.js

const decimal = Array(1e6 - 1).fill(0).map((x, i) => (i + 1).toString()).reduce((a, b) => a + b).split("").map((digit) => parseInt(digit));
let res = 1;
for (let i = 1; i < 1e6; i *= 10) res *= decimal[ i - 1 ];
console.log(res);
```
### Problems 41-50
#### Problem 41.js
```js
// src/1-50/41-50/41.js

const { range, isPrime, isPandigital } = require("../../Utils/utils.js");
/**
 * Notes:
 * Any number whose digit sum is divisible by 3 is also divisible by 3.
 * => Any pandigital that isn't 4 digits or 7 digits is not prime.
 */
const pandigitals = range(1000, 9999).filter(isPandigital).concat(range(1000000, 9999999).filter(isPandigital));
const primes = pandigitals.filter(isPrime);
console.log(primes.reduce((a, b) => Math.max(a, b)));
```
#### Problem 42.js
```js
// src/1-50/41-50/42.js

const { range, readFile } = require("../../Utils/utils");

const data = readFile("/Users/oathompsonjones/Programming/JS/Project Euler/src/Utils/p042_words.txt");
const words = JSON.parse(`[${data}]`);
const wordValues = words.map(word => word.toUpperCase().split("").map(char => char.charCodeAt(0) - 64).reduce((a, b) => a + b));
const largestValue = wordValues.reduce((a, b) => Math.max(a, b));
const triangulars = range(1, largestValue).map(i => 0.5 * i * (i + 1));
const triangularWords = wordValues.filter(num => triangulars.includes(num));
console.log(triangularWords.length);

```
#### Problem 43.js
```js
// src/1-50/41-50/43.js

const { isPrime, range, permutations } = require("../../Utils/utils.js");
const nums = permutations([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
const funnyNums = [];
const primes = range(0, 17).filter(isPrime);
nums.forEach((num) => {
    const subStrings = [];
    for (let i = 0; i < 7; i++) subStrings.push(parseInt(num.substr(i + 1, 3)));
    const isFunny = subStrings.every((x, i) => x % primes[ i ] === 0);
    if (isFunny) funnyNums.push(parseInt(num));
});
console.log(funnyNums.reduce((a, b) => a + b));
```
#### Problem 44.js
```js
// src/1-50/41-50/44.js

const { pentagonal, isPentagonal } = require("../../Utils/utils.js");

let found, pj, pk, sum, difference;

for (let j = 1; !found && j < 10000; j++) {
    for (let k = j + 1; !found && k < 10000; k++) {
        pj = pentagonal(j);
        pk = pentagonal(k);
        sum = pj + pk;
        difference = Math.abs(pj - pk);
        found = isPentagonal(sum) && isPentagonal(difference);
    }
}

console.log(difference);
```
#### Problem 45.js
```js
// src/1-50/41-50/45.js

const { isHexagonal, isPentagonal, triangular } = require("../../Utils/utils");

let result = null;

for (let n = 286; result === null; n++) {
    const tn = triangular(n);
    if (isHexagonal(tn) && isPentagonal(tn))
        result = tn;
}

console.log(result);
```
#### Problem 46.js
```js
// src/1-50/41-50/46.js

const { isPrime } = require("../../Utils/utils");

let result = null;

for (let i = 9; result === null; i += 2) {
    if (isPrime(i)) continue;
    for (let j = 1; j < Math.sqrt(i); j++) {
        if (isPrime(i - 2 * j * j)) {
            result = null;
            break;
        } else
            result = i;
    }
}

console.log(result);
```
#### Problem 47.js
```js
// src/1-50/41-50/47.js

const { primeFactors } = require("../../Utils/utils");

const COUNT = 4;
let consecutiveCount = 0;

let i = 0;
for (; consecutiveCount < COUNT; i++) {
    if (primeFactors(i).length === COUNT)
        consecutiveCount++;
    else consecutiveCount = 0;
}

console.log(i - COUNT);
```
#### Problem 48.js
```js
// src/1-50/41-50/48.js

// Yeah using BigInteger is kinda cheating, but oh well.
let sum = 0n;
for (let i = 1n; i <= 1000n; i++)
    sum += i ** i;
console.log(sum.toString().slice(sum.toString().length - 10));

// This is better.
// (a * b) % c = ((a % c) * (b % c)) % c
// (a + b) % c = ((a % c) + (b % c)) % c
let result = 0;
const modulo = 1e10;
for (let i = 1; i <= 1000; i++) {
    let temp = i;
    for (let j = 1; j < i; j++)
        if ((temp *= i) >= modulo)
            temp %= modulo;
    result += temp;
    result %= modulo;
}
console.log(result);
```
#### Problem 49.js
```js
// src/1-50/41-50/49.js

const { isPrime, arePermutations } = require("../../Utils/utils");

let finalTerms = [];
for (let i = 1000; i < 10000; i++) {
    if (!isPrime(i)) continue;
    const terms = [ i ];
    for (let j = 1; j < 3334; j++) {
        if (!isPrime(i + j) || !isPrime(i + j + j)) continue;
        if (!arePermutations(i, i + j) || !arePermutations(i, i + j + j)) continue;
        terms.push(i + j, i + j + j);
    }
    if (terms.length === 3)
        finalTerms = terms;
}
console.log(finalTerms.map((x) => x.toString()).join(""));
```
