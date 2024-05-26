# Project Euler
[Project Euler](https://projecteuler.net) is a website which is full of puzzles which can help develop programming skills.
This repository contains my solutions to each problem. These solutions may not all be the most efficient.
## Contents
- [Utils](#utils)
- [Problems 1-50](#problems-1-50)
	- [Problems 1-10](#problems-1-10)
		- [Problem 1.ts](#problem-1ts)
		- [Problem 2.ts](#problem-2ts)
		- [Problem 3.ts](#problem-3ts)
		- [Problem 4.ts](#problem-4ts)
		- [Problem 5.ts](#problem-5ts)
		- [Problem 6.ts](#problem-6ts)
		- [Problem 7.ts](#problem-7ts)
		- [Problem 8.ts](#problem-8ts)
		- [Problem 9.ts](#problem-9ts)
		- [Problem 10.ts](#problem-10ts)
	- [Problems 11-20](#problems-11-20)
		- [Problem 11.ts](#problem-11ts)
		- [Problem 12.ts](#problem-12ts)
		- [Problem 13.ts](#problem-13ts)
		- [Problem 14.ts](#problem-14ts)
		- [Problem 15.ts](#problem-15ts)
		- [Problem 16.ts](#problem-16ts)
		- [Problem 17.ts](#problem-17ts)
		- [Problem 18.ts](#problem-18ts)
		- [Problem 19.ts](#problem-19ts)
		- [Problem 20.ts](#problem-20ts)
	- [Problems 21-30](#problems-21-30)
		- [Problem 21.ts](#problem-21ts)
		- [Problem 22.ts](#problem-22ts)
		- [Problem 23.ts](#problem-23ts)
		- [Problem 24.ts](#problem-24ts)
		- [Problem 25.ts](#problem-25ts)
		- [Problem 26.ts](#problem-26ts)
		- [Problem 27.ts](#problem-27ts)
		- [Problem 28.ts](#problem-28ts)
		- [Problem 29.ts](#problem-29ts)
		- [Problem 30.ts](#problem-30ts)
	- [Problems 31-40](#problems-31-40)
		- [Problem 31.ts](#problem-31ts)
		- [Problem 32.ts](#problem-32ts)
		- [Problem 33.ts](#problem-33ts)
		- [Problem 34.ts](#problem-34ts)
		- [Problem 35.ts](#problem-35ts)
		- [Problem 36.ts](#problem-36ts)
		- [Problem 37.ts](#problem-37ts)
		- [Problem 38.ts](#problem-38ts)
		- [Problem 39.ts](#problem-39ts)
		- [Problem 40.ts](#problem-40ts)
	- [Problems 41-50](#problems-41-50)
		- [Problem 41.ts](#problem-41ts)
		- [Problem 42.ts](#problem-42ts)
		- [Problem 43.ts](#problem-43ts)
		- [Problem 44.ts](#problem-44ts)
		- [Problem 45.ts](#problem-45ts)
		- [Problem 46.ts](#problem-46ts)
		- [Problem 47.ts](#problem-47ts)
		- [Problem 48.ts](#problem-48ts)
		- [Problem 49.ts](#problem-49ts)
		- [Problem 50.ts](#problem-50ts)

## Utils
A series of utility functions which come in handy for several problems.

```ts
/* eslint-disable no-param-reassign */
export function range(start: number, end: number): number[] {
    return Array(end - start + 1).fill(0).map((_, i) => start + i);
}

export function map(x: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
    return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

export function factorial(n: number): number {
    return Array<number>(n).fill(0)
        .map((_, i) => i + 1)
        .reduce((a, b) => a * b, 1);
}

export function hcf(x: number, y: number): number {
    while (Math.max(x, y) % Math.min(x, y) !== 0) {
        if (x > y)
            x %= y;
        else
            y %= x;
    }

    return Math.min(x, y);
}

export function triangular(n: number): number {
    return n * (n + 1) / 2;
}

export function isTriangular(n: number): boolean {
    if (n < 0)
        return false;

    let sum = 0;

    for (let i = 1; sum <= n; i++) {
        sum += i;

        if (sum === n)
            return true;
    }

    return false;
}

export function pentagonal(n: number): number {
    return n * (3 * n - 1) / 2;
}

export function isPentagonal(n: number): boolean {
    let i = 1;
    let m;

    do
        m = pentagonal(i++);
    while (m < n);

    return m === n;
}

export function hexagonal(n: number): number {
    return n * (2 * n - 1);
}

export function isHexagonal(n: number): boolean {
    return (1 + Math.sqrt(8 * n + 1)) / 4 % 1 === 0;
}

export function isPrime(n: number): boolean {
    if (n <= 1)
        return false;

    if (n <= 3)
        return true;

    if (n % 2 === 0 || n % 3 === 0)
        return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0)
            return false;
    }

    return true;
}

export function isPandigital(n: number): boolean {
    return Array(Math.min(n.toString().length, 9))
        .fill(0)
        .map((_, i) => i + 1)
        .every((d) => n.toString().includes(String(d)));
}

export function swap(array: unknown[], index1: number, index2: number): void {
    const temp = array[index1];

    array[index1] = array[index2];
    array[index2] = temp;
}

export function permutations(a: unknown[]): string[] {
    const r = a.length - 1;
    const l = 0;
    const output: string[] = [];

    function permute(_a: unknown[], _l: number, _r: number): void {
        if (_l === _r) {
            output.push(_a.join(""));
        } else {
            for (let i = _l; i <= _r; i++) {
                swap(_a, _l, i);
                permute(_a, _l + 1, _r);
                swap(_a, _l, i);
            }
        }
    }

    permute(a, l, r);

    return output;
}

export function factors(n: number): number[] {
    const arr = [];
    let max = n;

    for (let i = 1; i < max; i++) {
        if (n % i === 0) {
            arr.push(i);
            const k = n / i;

            if (i !== k)
                arr.push(k);

            max = k;
        }
    }

    return arr.sort((a, b) => a - b);
}

export function howPerfect(n: number): "ABUNDANT" | "DEFICIENT" | "PERFECT" {
    let d = 0;

    for (let i = Math.floor(n / 2); i > 0; i--) {
        if (n % i === 0)
            d += i;
    }

    if (d === n)
        return "PERFECT";

    if (d < n)
        return "DEFICIENT";

    return "ABUNDANT";
}

export function isPerfect(n: number): boolean {
    return howPerfect(n) === "PERFECT";
}

export function isAbundant(n: number): boolean {
    return howPerfect(n) === "ABUNDANT";
}

export function isDeficient(n: number): boolean {
    return howPerfect(n) === "DEFICIENT";
}

export function primeFactors(n: number): number[] {
    const _factors = [];

    for (let divisor = 2; n >= 2;) {
        if (n % divisor === 0) {
            _factors.push(divisor);
            n /= divisor;
        } else {
            divisor++;
        }
    }

    return [...new Set(_factors)];
}

export function arePermutations(x: number, y: number): boolean {
    const xDigits = x.toString().split("")
        .map(Number);
    let yDigits = y.toString().split("")
        .map(Number);

    if (xDigits.length !== yDigits.length)
        return false;

    for (const digit of xDigits) {
        let index: number;

        if ((index = yDigits.indexOf(digit)) === -1)
            return false;

        yDigits = yDigits.filter((_, i) => i !== index);
    }

    return true;
}

```

## Problems 1-50
### Problems 1-10
#### Problem 1.ts
```ts
let sum = 0;

for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0)
        sum += i;
}
console.log(sum);

```
#### Problem 2.ts
```ts
let a = 1;
let b = 0;
let temp;
const numArr = [];
let total = 0;

while (a < 4000000) {
    temp = a;
    a += b;
    b = temp;

    if (b % 2 === 0)
        numArr.push(b);
}

numArr.forEach((num) => {
    total += num;
});

console.log(total);

```
#### Problem 3.ts
```ts
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

```
#### Problem 4.ts
```ts
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

```
#### Problem 5.ts
```ts
let num = 1;
let result = null;

while (result === null) {
    if (
        num % 1 === 0 &&
        num % 2 === 0 &&
        num % 3 === 0 &&
        num % 4 === 0 &&
        num % 5 === 0 &&
        num % 6 === 0 &&
        num % 7 === 0 &&
        num % 8 === 0 &&
        num % 9 === 0 &&
        num % 10 === 0 &&
        num % 11 === 0 &&
        num % 12 === 0 &&
        num % 13 === 0 &&
        num % 14 === 0 &&
        num % 15 === 0 &&
        num % 16 === 0 &&
        num % 17 === 0 &&
        num % 18 === 0 &&
        num % 19 === 0 &&
        num % 20 === 0
    )
        result = num;

    num++;
}

console.log(result);

```
#### Problem 6.ts
```ts
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

```
#### Problem 7.ts
```ts
const primes = [2];

for (let i = 3; primes.length <= 10001; i += 2) {
    if (primes.every((v) => i % v !== 0)) {
        primes.push(i);

        if (primes.length === 10001)
            console.log(i);
    }
}

```
#### Problem 8.ts
```ts
const num = [
    "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843",
    "8586156078911294949545950173795833195285320880551112540698747158523863050715693290963295227443043557",
    "6689664895044524452316173185640309871112172238311362229893423380308135336276614282806444486645238749",
    "3035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776",
    "6572733300105336788122023542180975125454059475224352584907711670556013604839586446706324415722155397",
    "5369781797784617406495514929086256932197846862248283972241375657056057490261407972968652414535100474",
    "8216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586",
    "1786645835912456652947654568284891288314260769004224219022671055626321111109370544217506941658960408",
    "0719840385096245544436298123098787992724428490918884580156166097919133875499200524063689912560717606",
    "0588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450",
].join("").split("").map((i) => parseInt(i, 10));

let largest = 0;

for (let i = 1; i < 1000; i++) {
    const product = Object.keys(new Array(13).fill(0)).map((j) => num[i + parseInt(j, 10)]!).reduce((a, b) => a * b);

    if (!isNaN(product))
        largest = Math.max(product, largest);
}
console.log(largest);

```
#### Problem 9.ts
```ts
const arrPythag = [];

for (let i = 1; i <= 1000; i++)
    arrPythag.push(i);
const allTriplets = [];

for (const i of arrPythag) {
    for (const k of arrPythag) {
        for (const p of arrPythag) {
            const aSquared = i ** 2;
            const bSquared = k ** 2;
            const cSquared = p ** 2;

            if (aSquared + bSquared === cSquared && i + k + p === 1000)
                allTriplets.push([i, k, p]);
        }
    }
}
const product = allTriplets[0]![0]! * allTriplets[0]![1]! * allTriplets[0]![2]!;

console.log(product);

```
#### Problem 10.ts
```ts
import { isPrime } from "../../Utils/utils.js";

let sum = 0;

for (let i = 2; i < 2000000; i++) {
    if (isPrime(i))
        sum += i;
}
console.log(sum);

```

### Problems 11-20
#### Problem 11.ts
```ts
const GRID = [
    [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
    [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
    [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
    [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
    [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
    [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
    [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
    [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
    [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
    [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
    [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
    [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
    [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
    [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
    [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
    [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48],
];
const NUM = 4;
let product = 0;

for (let i = NUM - 1; i < GRID.length - NUM; i++) {
    for (let k = NUM - 1; k < GRID.length - NUM; k++) {
        product = Math.max(
            product,

            // TOP ROW

            // LT
            GRID[i - 3]![k - 3]! * GRID[i - 2]![k - 2]! * GRID[i - 1]![k - 1]! * GRID[i]![k]!,
            // MT
            GRID[i - 3]![k]! * GRID[i - 2]![k]! * GRID[i - 1]![k]! * GRID[i]![k]!,
            // RT
            GRID[i - 3]![k + 3]! * GRID[i - 2]![k + 2]! * GRID[i - 1]![k + 1]! * GRID[i]![k]!,

            // MIDDLE ROW

            // LM
            GRID[i]![k - 3]! * GRID[i]![k - 2]! * GRID[i]![k - 1]! * GRID[i]![k]!,
            // RM
            GRID[i]![k + 3]! * GRID[i]![k + 2]! * GRID[i]![k + 1]! * GRID[i]![k]!,

            // BOTTOM ROW

            // LB
            GRID[i + 3]![k - 3]! * GRID[i + 2]![k - 2]! * GRID[i + 1]![k + 1]! * GRID[i]![k]!,
            // MB
            GRID[i + 3]![k]! * GRID[i + 2]![k]! * GRID[i + 1]![k]! * GRID[i]![k]!,
            // RB
            GRID[i + 3]![k + 3]! * GRID[i + 2]![k + 2]! * GRID[i + 1]![k + 1]! * GRID[i]![k]!,
        );
    }
}
console.log(product);

```
#### Problem 12.ts
```ts
import { factors } from "../../Utils/utils.js";

let x = 0;
let y = 1;

while (factors(x).length <= 500)
    x += y++;

console.log(x);

```
#### Problem 13.ts
```ts
const num = "37107287533902102798797998220837590246510135740250\n" +
    "46376937677490009712648124896970078050417018260538\n" +
    "74324986199524741059474233309513058123726617309629\n" +
    "91942213363574161572522430563301811072406154908250\n" +
    "23067588207539346171171980310421047513778063246676\n" +
    "89261670696623633820136378418383684178734361726757\n" +
    "28112879812849979408065481931592621691275889832738\n" +
    "44274228917432520321923589422876796487670272189318\n" +
    "47451445736001306439091167216856844588711603153276\n" +
    "70386486105843025439939619828917593665686757934951\n" +
    "62176457141856560629502157223196586755079324193331\n" +
    "64906352462741904929101432445813822663347944758178\n" +
    "92575867718337217661963751590579239728245598838407\n" +
    "58203565325359399008402633568948830189458628227828\n" +
    "80181199384826282014278194139940567587151170094390\n" +
    "35398664372827112653829987240784473053190104293586\n" +
    "86515506006295864861532075273371959191420517255829\n" +
    "71693888707715466499115593487603532921714970056938\n" +
    "54370070576826684624621495650076471787294438377604\n" +
    "53282654108756828443191190634694037855217779295145\n" +
    "36123272525000296071075082563815656710885258350721\n" +
    "45876576172410976447339110607218265236877223636045\n" +
    "17423706905851860660448207621209813287860733969412\n" +
    "81142660418086830619328460811191061556940512689692\n" +
    "51934325451728388641918047049293215058642563049483\n" +
    "62467221648435076201727918039944693004732956340691\n" +
    "15732444386908125794514089057706229429197107928209\n" +
    "55037687525678773091862540744969844508330393682126\n" +
    "18336384825330154686196124348767681297534375946515\n" +
    "80386287592878490201521685554828717201219257766954\n" +
    "78182833757993103614740356856449095527097864797581\n" +
    "16726320100436897842553539920931837441497806860984\n" +
    "48403098129077791799088218795327364475675590848030\n" +
    "87086987551392711854517078544161852424320693150332\n" +
    "59959406895756536782107074926966537676326235447210\n" +
    "69793950679652694742597709739166693763042633987085\n" +
    "41052684708299085211399427365734116182760315001271\n" +
    "65378607361501080857009149939512557028198746004375\n" +
    "35829035317434717326932123578154982629742552737307\n" +
    "94953759765105305946966067683156574377167401875275\n" +
    "88902802571733229619176668713819931811048770190271\n" +
    "25267680276078003013678680992525463401061632866526\n" +
    "36270218540497705585629946580636237993140746255962\n" +
    "24074486908231174977792365466257246923322810917141\n" +
    "91430288197103288597806669760892938638285025333403\n" +
    "34413065578016127815921815005561868836468420090470\n" +
    "23053081172816430487623791969842487255036638784583\n" +
    "11487696932154902810424020138335124462181441773470\n" +
    "63783299490636259666498587618221225225512486764533\n" +
    "67720186971698544312419572409913959008952310058822\n" +
    "95548255300263520781532296796249481641953868218774\n" +
    "76085327132285723110424803456124867697064507995236\n" +
    "37774242535411291684276865538926205024910326572967\n" +
    "23701913275725675285653248258265463092207058596522\n" +
    "29798860272258331913126375147341994889534765745501\n" +
    "18495701454879288984856827726077713721403798879715\n" +
    "38298203783031473527721580348144513491373226651381\n" +
    "34829543829199918180278916522431027392251122869539\n" +
    "40957953066405232632538044100059654939159879593635\n" +
    "29746152185502371307642255121183693803580388584903\n" +
    "41698116222072977186158236678424689157993532961922\n" +
    "62467957194401269043877107275048102390895523597457\n" +
    "23189706772547915061505504953922979530901129967519\n" +
    "86188088225875314529584099251203829009407770775672\n" +
    "11306739708304724483816533873502340845647058077308\n" +
    "82959174767140363198008187129011875491310547126581\n" +
    "97623331044818386269515456334926366572897563400500\n" +
    "42846280183517070527831839425882145521227251250327\n" +
    "55121603546981200581762165212827652751691296897789\n" +
    "32238195734329339946437501907836945765883352399886\n" +
    "75506164965184775180738168837861091527357929701337\n" +
    "62177842752192623401942399639168044983993173312731\n" +
    "32924185707147349566916674687634660915035914677504\n" +
    "99518671430235219628894890102423325116913619626622\n" +
    "73267460800591547471830798392868535206946944540724\n" +
    "76841822524674417161514036427982273348055556214818\n" +
    "97142617910342598647204516893989422179826088076852\n" +
    "87783646182799346313767754307809363333018982642090\n" +
    "10848802521674670883215120185883543223812876952786\n" +
    "71329612474782464538636993009049310363619763878039\n" +
    "62184073572399794223406235393808339651327408011116\n" +
    "66627891981488087797941876876144230030984490851411\n" +
    "60661826293682836764744779239180335110989069790714\n" +
    "85786944089552990653640447425576083659976645795096\n" +
    "66024396409905389607120198219976047599490197230297\n" +
    "64913982680032973156037120041377903785566085089252\n" +
    "16730939319872750275468906903707539413042652315011\n" +
    "94809377245048795150954100921645863754710598436791\n" +
    "78639167021187492431995700641917969777599028300699\n" +
    "15368713711936614952811305876380278410754449733078\n" +
    "40789923115535562561142322423255033685442488917353\n" +
    "44889911501440648020369068063960672322193204149535\n" +
    "41503128880339536053299340368006977710650566631954\n" +
    "81234880673210146739058568557934581403627822703280\n" +
    "82616570773948327592232845941706525094512325230608\n" +
    "22918802058777319719839450180888072429661980811197\n" +
    "77158542502016545090413245809786882778948721859617\n" +
    "72107838435069186155435662884062257473692284509516\n" +
    "20849603980134001723930671666823555245252804609722\n" +
    "53503534226472524250874054075591789781264330331690";
let sum = 0;

num.split("\n").forEach((number) => {
    sum += parseInt(number, 10);
});
console.log(sum.toString().replace(".", "")
    .slice(0, 10));

```
#### Problem 14.ts
```ts
/* eslint-disable no-param-reassign */
function sequence(num: number): number[] {
    const _sequence = [];

    while (num !== 1) {
        _sequence.push(num);

        if (num % 2 === 0)
            num /= 2;
        else
            num = num * 3 + 1;
    }

    return _sequence;
}

let longestSequenceLength = 0;
let longestSequenceNumber = 0;

for (let i = 1; i < 1000000; i++) {
    const temp = sequence(i);

    if (temp.length > longestSequenceLength) {
        longestSequenceLength = temp.length;
        longestSequenceNumber = i;
    }
}

console.log(longestSequenceNumber);

```
#### Problem 15.ts
```ts
const numRoutes: number[][] = [];

function getNumRoutes(sizeX: number, sizeY: number): number {
    numRoutes[sizeX] ??= [];

    if (numRoutes[sizeX]![sizeY] !== undefined)
        return numRoutes[sizeX]![sizeY]!;

    if (sizeX === 0 || sizeY === 0)
        return 1;

    let routes = getNumRoutes(sizeX - 1, sizeY);

    routes += getNumRoutes(sizeX, sizeY - 1);

    numRoutes[sizeX]![sizeY] = routes;

    return routes;
}

console.log(getNumRoutes(20, 20));

```
#### Problem 16.ts
```ts
const number = [1];
let sum = 0;

for (let i = 0; i < 1000; i++) {
    let overflow = 0;
    const count = number.length + 1;

    for (let j = 0; j < count; j++) {
        let digit = number[j] ?? 0;

        digit = 2 * digit + overflow;

        if (digit > 9) {
            digit -= 10;
            overflow = 1;
        } else {
            overflow = 0;
        }

        number[j] = digit;
    }
}
for (let i = 0; i < 1000; i++)
    sum += number[i]!;

console.log(sum);

```
#### Problem 17.ts
```ts
const baseNumbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const baseTens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function countLettersTo1000(): number {
    let count = 0;

    // 1-9
    for (const baseNumber of baseNumbers)
        count += baseNumber.length;

    // 10-19
    for (const teen of teens)
        count += teen.length;

    // 20-99
    for (const baseTen of baseTens) {
        for (const baseNumber of baseNumbers)
            count += baseTen.length + baseNumber.length;
    }

    const oneToOneHundred = count;

    // 100-999
    for (let i = 1; i < baseNumbers.length; i++) {
        const hundredsPrefix = `${baseNumbers[i]}hundred`;

        count += hundredsPrefix.length;
        count += oneToOneHundred;
        count += 99 * `${hundredsPrefix}and`.length;
    }

    // 1000
    count += "onethousand".length;

    return count;
}

console.log(countLettersTo1000());

```
#### Problem 18.ts
```ts
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
    "04 62 98 27 23 09 70 98 73 93 38 53 60 04 23",
];

function prepareNumTriangle(tri: string[]): number[][] {
    const numTri: number[][] = [];

    for (let i = 0; i < tri.length; i++) {
        numTri[i] = [];
        const row = tri[i]!.split(" ");

        for (let j = 0; j < row.length; j++)
            numTri[i]![j] = parseInt(row[j]!, 10);
    }

    return numTri;
}

function collapseTriangleToHighest(numTri: number[][]): number {
    const tmpTri = numTri;
    let botRow = tmpTri[tmpTri.length - 1]!;

    for (let i = 0; i < tmpTri.length - 1; i++) {
        const checkRow = tmpTri[tmpTri.length - 2 - i]!;

        for (let j = 0; j < checkRow.length; j++) {
            if (botRow[j]! > botRow[j + 1]!)
                checkRow[j] += botRow[j]!;
            else
                checkRow[j] += botRow[j + 1]!;
        }
        botRow = checkRow;
    }

    return tmpTri[0]![0]!;
}

console.log(collapseTriangleToHighest(prepareNumTriangle(triangle)));

```
#### Problem 19.ts
```ts
let daysFound = 0;

for (let date = new Date(1901, 0, 1); date <= new Date(2000, 11, 31); date.setDate(date.getDate() + 1)) {
    if (date.getDay() === 0 && date.getDate() === 1)
        daysFound++;
}
console.log(daysFound);

```
#### Problem 20.ts
```ts
const num = [
    "9332621544394415268169923885626670049071596826438162146859296389521759999322991",
    "5608941463976156518286253697920827223758251185210916864000000000000000000000000",
].join("");
let total = 0;

num.split("").forEach((n) => {
    total += parseInt(n, 10);
});
console.log(total);

```

### Problems 21-30
#### Problem 21.ts
```ts
function d(n: number): { divisors: number[]; total: number; } {
    const divisors = [0];

    for (let i = Math.floor(n / 2); i > 0; i--) {
        if (n % i === 0)
            divisors.push(i);
    }

    return {
        divisors,
        total: divisors.reduce((a, b) => a + b),
    };
}

let nums = [];

for (let i = 1; i < 10000; i++) {
    const di = d(i).total;

    if (d(di).total === i && i !== d(i).total)
        nums.push(i, d(i).total);
}
nums = [...new Set(nums)];
console.log(nums.reduce((a, b) => a + b));

```
#### Problem 22.ts
```ts
import { readFile } from "fs/promises";

const data = await readFile("/Users/oathompsonjones/Programming/JS/Project Euler/src/Utils/p022_names.txt", "utf-8");
const names = data.replace(/"/ug, "").split(",")
    .sort()
    .map((name) => ({
        ascii: 0,
        score: 0,
        value: name,
    }));

names.forEach((name) => {
    for (let i = 0; i < name.value.length; i++)
        name.ascii += name.value.charCodeAt(i) - 64;
    name.score = name.ascii * (names.map((n) => n.value).indexOf(name.value) + 1);
});
console.log(names.map((name) => name.score).reduce((a, b) => a + b));

```
#### Problem 23.ts
```ts
import { isAbundant } from "../../Utils/utils.js";

// All numbers larger can be expressed as the sum of 2 abundant numbers.
const upperLimit = 28123;
const abundant = Object.keys(new Array(upperLimit).fill(0)).map((i) => parseInt(i, 10))
    .filter((i) => isAbundant(i));

let abundantSums: number[] = [];

for (const i of abundant) {
    for (const j of abundant)
        abundantSums.push(i + j);
}
abundantSums = [...new Set(abundantSums)];

const notSumOfAbunadant = Object.keys(new Array(upperLimit).fill(0)).map((i) => parseInt(i, 10))
    .filter((i) => !abundantSums.includes(i));

console.log(notSumOfAbunadant.reduce((a, b) => a + b));

```
#### Problem 24.ts
```ts
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const permutations: number[][] = [];
const usedChars: number[] = [];

function permute(input: number[]): number[][] {
    for (let i = 0; i < input.length; i++) {
        const char = input.splice(i, 1)[0]!;

        usedChars.push(char);

        if (input.length === 0)
            permutations.push(usedChars.slice());

        permute(input);
        input.splice(i, 0, char);
        usedChars.pop();
    }

    return permutations;
}

console.log(permute(digits)[1000000 - 1]?.join(""));

```
#### Problem 25.ts
```ts
const fibonacciDigits = [1n, 1n];

function fibonacci(): bigint[] | number[] {
    if (fibonacciDigits[fibonacciDigits.length - 1]?.toString().length === 1000)
        return fibonacciDigits;

    fibonacciDigits.push(fibonacciDigits[fibonacciDigits.length - 1]! + fibonacciDigits[fibonacciDigits.length - 2]!);

    return fibonacci();
}

console.log(fibonacci().length);

```
#### Problem 26.ts
```ts
function getCycleSize(num: number): number {
    let numerator = 1;
    const numerators = [];
    const numeratorDigits = [];

    let digitsInSequence = 0;

    while (!digitsInSequence) {
        if (numerator === 0)
            return 0;

        // Check if the numerator is previously repeated
        for (let i = 0; i < numerators.length; i++) {
            if (numerator === numerators[i]) {
                digitsInSequence = 0;
                for (let j = i; j < numerators.length; j++)
                    digitsInSequence += numeratorDigits[j]!;

                return digitsInSequence;
            }
        }

        // Repeat not found, update the numerators and digits
        numerators[numerators.length] = numerator;
        let digits = 1;

        while (num > numerator) {
            numerator *= 10;
            digits++;
        }

        numeratorDigits[numeratorDigits.length] = digits;
        // Get the next numerator
        numerator %= num;
    }

    return NaN;
}

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
#### Problem 27.ts
```ts
import { isPrime } from "../../Utils/utils.js";

function newEqu(a: number, b: number, n: number): number {
    return n * n + a * n + b;
}

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
#### Problem 28.ts
```ts
const corners = [1];
let currentCorners = [];
let currentDifference = 2;

for (let i = 2; i <= 1001 * 1001; i++) {
    if (currentDifference === i - corners[corners.length - 1]!) {
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
#### Problem 29.ts
```ts
const numbers = [];

for (let a = 2; a <= 100; a++) {
    for (let b = 2; b <= 100; b++)
        numbers.push(a ** b);
}
console.log([...new Set(numbers)].length);

```
#### Problem 30.ts
```ts
const numbers = [];

function digits(n: number): number[] {
    return n.toString().split("").map(Number);
}

for (let i = 10; i < 1000000; i++) {
    if (i === digits(i).map((j) => j ** 5)
        .reduce((a, b) => a + b))
        numbers.push(i);
}
console.log(numbers.reduce((a, b) => a + b));

```

### Problems 31-40
#### Problem 31.ts
```ts
/* eslint-disable max-depth */
let ways = 0;

for (let a = 200; a >= 0; a -= 200) {
    for (let b = a; b >= 0; b -= 100) {
        for (let c = b; c >= 0; c -= 50) {
            for (let d = c; d >= 0; d -= 20) {
                for (let e = d; e >= 0; e -= 10) {
                    for (let f = e; f >= 0; f -= 5) {
                        for (let g = f; g >= 0; g -= 2)
                            ways++;
                    }
                }
            }
        }
    }
}
console.log(ways);

```
#### Problem 32.ts
```ts
const permutations: number[][] = ((input): number[][] => {
    const permArr: number[][] = [];
    const usedChars: number[] = [];

    function permute(inp: number[]): number[][] {
        let ch;

        for (let i = 0; i < inp.length; i++) {
            ch = inp.splice(i, 1)[0]!;
            usedChars.push(ch);

            if (inp.length === 0)
                permArr.push(usedChars.slice());

            permute(inp);
            inp.splice(i, 0, ch);
            usedChars.pop();
        }

        return permArr;
    }

    return permute(input);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const products: number[] = [];

permutations.forEach((permutation) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const string = permutation.map((a) => a.toString()).join("");
            const int1 = parseInt(string.slice(0, i), 10);
            const int2 = parseInt(string.slice(i, j), 10);
            const int3 = parseInt(string.slice(j, string.length), 10);

            if (int1 * int2 === int3)
                products.push(int3);
        }
    }
});

console.log([...new Set(products)].reduce((a, b) => a + b));

```
#### Problem 33.ts
```ts
import { hcf } from "../../Utils/utils.js";

const results = [];

for (let n = 10; n < 100; n++) {
    for (let d = n + 1; d < 100; d++) {
        const numerator = n.toString().split("");
        const denominator = d.toString().split("");
        const commonDigit = numerator.find((j) => j === denominator.find((i) => i === numerator[0] || i === numerator[1]));

        if (commonDigit === undefined || commonDigit === "0")
            continue;

        const newNumerator = parseInt(numerator.join("").replace(commonDigit, ""), 10);
        const newDenominator = parseInt(denominator.join("").replace(commonDigit, ""), 10);

        if (n / d === newNumerator / newDenominator)
            results.push([n, d]);
    }
}

const finalNumerator = results.map((i) => i[0]!).reduce((a, b) => a * b);
const finalDenominator = results.map((i) => i[1]!).reduce((a, b) => a * b);

console.log(finalDenominator / hcf(finalNumerator, finalDenominator));

```
#### Problem 34.ts
```ts
import { factorial } from "../../Utils/utils.js";

const nums = [];

for (let i = 3; i < 1000000; i++) {
    const digits = i.toString().split("");
    const factorialDigits = digits.map((digit) => factorial(parseInt(digit, 10)));
    const sum = factorialDigits.reduce((a, b) => a + b);

    if (sum === i)
        nums.push(i);
}

console.log(nums.reduce((a, b) => a + b, 0));

```
#### Problem 35.ts
```ts
import { isPrime } from "../../Utils/utils.js";

function rotations(n: number): string[] {
    const numbers = [];
    let num = n.toString();

    for (const _ of n.toString()) {
        numbers.push(num);
        num = `${num.split("")[num.length - 1]}${num.slice(0, num.length - 1)}`;
    }

    return numbers;
}

const primes = Array(1000000).fill(0).map((_, i) => i)
    .filter((i) => isPrime(i));
const allCircularPrimes = primes.filter((prime) => rotations(prime).map((r) => isPrime(Number(r))).every((b) => b));

console.log(allCircularPrimes.length);

```
#### Problem 36.ts
```ts
function stringToBinary(str: string): string {
    return parseInt(str, 10).toString(2);
}

const palindromicDecimals = Array(1000000).fill(0)
    .map((_, i) => i.toString())
    .filter((i) => i.split("").reverse()
        .join("") === i);
const palindromicDecimalsAsBinary = palindromicDecimals.map(stringToBinary);
const palindromicBinarys = palindromicDecimalsAsBinary.filter((i) => i.split("").reverse()
    .join("") === i);

console.log(palindromicBinarys.map((bin) => parseInt(bin, 2)).reduce((a, b) => a + b));

```
#### Problem 37.ts
```ts
import { isPrime } from "../../Utils/utils.js";

const primes = Array(1e6).fill(0)
    .map((_, i) => i)
    .filter(isPrime);
const truncatableLeftToRight = primes.filter((prime) => {
    let str = prime.toString();

    while (str.length > 1) {
        str = str.slice(1);

        if (!isPrime(parseInt(str, 10)))
            return false;
    }

    return true;
});
const truncatableBothWays = truncatableLeftToRight.filter((prime) => {
    let str = prime.toString();

    while (str.length > 1) {
        str = str.slice(0, str.length - 1);

        if (!isPrime(parseInt(str, 10)))
            return false;
    }

    return true;
});

console.log(truncatableBothWays.filter((prime) => prime > 10).reduce((a, b) => a + b));

```
#### Problem 38.ts
```ts
function getPandigital(i: number): number {
    let str = "";

    for (let n = 1; str.length < 9; n++)
        str += i * n;

    if (str.length > 9)
        return NaN;

    for (let j = 1; j <= 9; j++) {
        if (!str.includes(j.toString()))
            return NaN;
    }

    return parseInt(str, 10);
}

const pandigitals = Array(1e6).fill(0)
    .map((_, i) => getPandigital(i))
    .filter((i) => !isNaN(i));

console.log(pandigitals.reduce((a, b) => Math.max(a, b)));

```
#### Problem 39.ts
```ts
function pythagoreanTriples(total: number): number[][] {
    const triples = [];

    for (let a = 1; a < total / 2; a++) {
        for (let b = 1; b < total / 2; b++) {
            for (let c = 1; c < total / 2; c++) {
                if (a * a + b * b === c * c)
                    triples.push([a, b, c]);
            }
        }
    }

    return [...new Set(triples.map((triple) => triple.sort((a, b) => a - b)))]
        .filter((triple) => triple.reduce((a, b) => a + b) === total);
}

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
#### Problem 40.ts
```ts
const decimal = Array(1e6 - 1).fill(0)
    .map((_, i) => (i + 1).toString())
    .reduce((a, b) => a + b)
    .split("")
    .map((digit) => parseInt(digit, 10));
let res = 1;

for (let i = 1; i < 1e6; i *= 10)
    res *= decimal[i - 1]!;
console.log(res);

```

### Problems 41-50
#### Problem 41.ts
```ts
import { isPandigital, isPrime, range } from "../../Utils/utils.js";

/**
 * Notes:
 * Any number whose digit sum is divisible by 3 is also divisible by 3.
 * =\> Any pandigital that isn't 4 digits or 7 digits is not prime.
 */
const pandigitals = range(1000, 9999).filter(isPandigital)
    .concat(range(1000000, 9999999).filter(isPandigital));
const primes = pandigitals.filter(isPrime);

console.log(primes.reduce((a, b) => Math.max(a, b)));

```
#### Problem 42.ts
```ts
import { range } from "../../Utils/utils.js";
import { readFile } from "fs/promises";

const data = await readFile("/Users/oathompsonjones/Programming/JS/Project Euler/src/Utils/p042_words.txt", "utf-8");
const words = JSON.parse(`[${data}]`) as unknown as string[];
const wordValues = words.map((word) => word.toUpperCase().split("")
    .map((char) => char.charCodeAt(0) - 64)
    .reduce((a, b) => a + b));
const largestValue = wordValues.reduce((a, b) => Math.max(a, b));
const triangulars = range(1, largestValue).map((i) => 0.5 * i * (i + 1));
const triangularWords = wordValues.filter((num) => triangulars.includes(num));

console.log(triangularWords.length);

```
#### Problem 43.ts
```ts
import { isPrime, permutations, range } from "../../Utils/utils.js";

const nums = permutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const funnyNums: number[] = [];
const primes = range(0, 17).filter(isPrime);

nums.forEach((num) => {
    const subStrings = [];

    for (let i = 0; i < 7; i++)
        subStrings.push(parseInt(num.substr(i + 1, 3), 10));
    // eslint-disable-next-line @typescript-eslint/no-confusing-non-null-assertion
    const isFunny = subStrings.every((x, i) => x % primes[i]! === 0);

    if (isFunny)
        funnyNums.push(parseInt(num, 10));
});
console.log(funnyNums.reduce((a, b) => a + b));

```
#### Problem 44.ts
```ts
import { isPentagonal, pentagonal } from "../../Utils/utils.js";

let found = false;
let difference = 0;
let pj = 0;
let pk = 0;
let sum = 0;

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
#### Problem 45.ts
```ts
import { isHexagonal, isPentagonal, triangular } from "../../Utils/utils.js";

let result = null;

for (let n = 286; result === null; n++) {
    const tn = triangular(n);

    if (isHexagonal(tn) && isPentagonal(tn))
        result = tn;
}

console.log(result);

```
#### Problem 46.ts
```ts
import { isPrime } from "../../Utils/utils.js";

let result = null;

for (let i = 9; result === null; i += 2) {
    if (isPrime(i))
        continue;

    for (let j = 1; j < Math.sqrt(i); j++) {
        if (isPrime(i - 2 * j * j)) {
            result = null;
            break;
        } else {
            result = i;
        }
    }
}

console.log(result);

```
#### Problem 47.ts
```ts
import { primeFactors } from "../../Utils/utils.js";

const COUNT = 4;
let consecutiveCount = 0;

let i = 0;

for (; consecutiveCount < COUNT; i++) {
    if (primeFactors(i).length === COUNT)
        consecutiveCount++;
    else
        consecutiveCount = 0;
}

console.log(i - COUNT);

```
#### Problem 48.ts
```ts
// Yeah using BigInteger is kinda cheating, but oh well.
let sum = 0n;

for (let i = 1n; i <= 1000n; i++)
    sum += i ** i;
console.log(sum.toString().slice(sum.toString().length - 10));

/* This is better.
   (a * b) % c = ((a % c) * (b % c)) % c
   (a + b) % c = ((a % c) + (b % c)) % c */
let result = 0;
const modulo = 1e10;

for (let i = 1; i <= 1000; i++) {
    let temp = i;

    for (let j = 1; j < i; j++) {
        if ((temp *= i) >= modulo)
            temp %= modulo;
    }
    result += temp;
    result %= modulo;
}
console.log(result);

```
#### Problem 49.ts
```ts
import { arePermutations, isPrime } from "../../Utils/utils.js";

let finalTerms: number[] = [];

for (let i = 1000; i < 10000; i++) {
    if (!isPrime(i))
        continue;

    const terms = [i];

    for (let j = 1; j < 3334; j++) {
        if (!isPrime(i + j) || !isPrime(i + j + j))
            continue;

        if (!arePermutations(i, i + j) || !arePermutations(i, i + j + j))
            continue;

        terms.push(i + j, i + j + j);
    }

    if (terms.length === 3)
        finalTerms = terms;
}
console.log(finalTerms.map((x) => x.toString()).join(""));

```
#### Problem 50.ts
```ts
import { isPrime } from "../../Utils/utils.js";

/* eslint-disable @typescript-eslint/naming-convention */
const pi = {
    10: 4,
    100: 25,
    1_000: 168,
    10_000: 1_229,
    100_000: 9_592,
    1_000_000: 78_498,
};
/* eslint-enable @typescript-eslint/naming-convention */
const x = 1e6;

function* primeGeneratorFunc(): Generator<number, number> {
    let primeCounter = 1;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while (true) {
        while (!isPrime(++primeCounter))
            ;

        yield primeCounter;
    }
}
const primeGenerator = primeGeneratorFunc();
const primes = Array(pi[x]).fill(0).map(() => primeGenerator.next().value);

const primeSums: Record<number, number[]> = {};

for (let i = primes.length - 1; i > 1; i--) {
    for (let j = 0; j < primes.length; j++) {
        const sum: number[] = [];

        for (let k = j; k < Math.min(j + i, primes.length); k++)
            sum.push(primes[k]!);
        const sumValue = sum.reduce((a, b) => a + b);

        if (isPrime(sumValue) && sumValue < x && sum.length > (primeSums[sumValue]?.length ?? -1))
            primeSums[sumValue] = sum;
    }
}

let longestSumKey = -1;

for (const index in primeSums) {
    if (primeSums[longestSumKey] === undefined || primeSums[index]!.length > primeSums[longestSumKey]!.length)
        longestSumKey = Number(index);
}
console.log(longestSumKey);

```



