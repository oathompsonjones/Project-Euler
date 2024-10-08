/* eslint-disable no-param-reassign */

// * Array *

/**
 * Generates the range [0, end).
 * @param end - The ending number.
 * @returns An array of numbers from 0 to `end`.
 */
export function range(end: number): number[];
/**
 * Generates the range [start, end).
 * @param start - The starting number.
 * @param end - The ending number.
 * @returns An array of numbers from `start` to `end`.
 */
export function range(start: number, end: number): number[];
/**
 * Generates the range [start, end).
 * @param start - The starting number.
 * @param end - The ending number.
 * @returns An array of numbers from `start` to `end`.
 */
export function range(start: number, end?: number): number[] {
    if (end === undefined) {
        end = start;
        start = 0;
    }

    return Array.from({ length: end - start }, (_, i) => start + i);
}

/**
 * Calculates the sum of an array of numbers.
 * @param ns - The array of numbers.
 * @returns The sum of `ns`.
 */
export function sum(ns: number[]): number {
    return ns.reduce((a, b) => a + b, 0);
}

/**
 * Calculates the product of an array of numbers.
 * @param ns - The array of numbers.
 * @returns The product of `ns`.
 */
export function product(ns: number[]): number {
    return ns.reduce((a, b) => a * b, 1);
}

/**
 * Swaps two elements in an array.
 * @param array - The array to swap elements in.
 * @param index1 - The index of the first element.
 * @param index2 - The index of the second element.
 */
export function swap(array: unknown[], index1: number, index2: number): void {
    const temp = array[index1];

    array[index1] = array[index2];
    array[index2] = temp;
}

// * Permutations *

/**
 * Generates the permutations of an array.
 * @template T - The type of the array.
 * @param array - The array to generate permutations of.
 * @returns An array of permutations.
 */
export function permutations<T>(array: T[]): T[][] {
    const copy = array.slice();
    const result = [array.slice()];
    const c = Array.from({ length: array.length }, () => 0);

    for (let i = 1; i < array.length; i++) {
        if (c[i]! < i) {
            swap(copy, i, i % 2 && c[i]!);
            ++c[i]!;
            i = 0;
            result.push(copy.slice());
        } else {
            c[i] = 0;
        }
    }

    return result;
}

/**
 * Checks if two arrays are permutations of each other.
 * @template T - The type of the arrays.
 * @param xs - The first array.
 * @param ys - The second array.
 * @returns `true` if `xs` and `ys` are permutations of each other, `false` otherwise.
 */
export function arePermutations<T>(xs: T[], ys: T[]): boolean {
    if (xs.length !== ys.length)
        return false;

    for (const x of xs) {
        let index: number;

        if ((index = ys.indexOf(x)) === -1)
            return false;

        ys = ys.filter((_, i) => i !== index);
    }

    return true;
}

/**
 * Generates the rotations of an array.
 * @template T - The type of the array.
 * @param array - The array to generate rotations of.
 * @returns An array of rotations.
 */
export function rotations<T>(array: T[]): T[][] {
    const rots = [];
    let copy = array.slice();

    for (const _ of array) {
        rots.push(copy);
        copy = [copy[copy.length - 1]!, ...copy.slice(0, copy.length - 1)];
    }

    return rots;
}

// * Combinations *

/**
 * Generates the combinations of an array.
 * @template T - The type of the array.
 * @param array - The array to generate combinations of.
 * @returns An array of combinations.
 */
export function combinations<T>(array: T[]): T[][] {
    const combos: T[][] = [];

    for (let i = 0; i < 2 ** array.length; i++) {
        const temp = [];

        for (let j = 0; j < array.length; j++) {
            if (i & 2 ** j)
                temp.push(array[j]!);
        }

        if (temp.length > 0)
            combos.push(temp);
    }

    return combos;
}

/**
 * Calculates the number of combinations of `n` choose `r`.
 * @param n - The number of items.
 * @param r - The number of items to choose.
 * @returns The number of combinations of `n` choose `r`.
 */
export function nChooseR(n: number, r: number): number {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

// * Maths Utilities *

/**
 * Generates the digits of a number.
 * @param n - The number.
 * @returns An array of the digits of `n`.
 */
export function digits(n: bigint | number): number[] {
    return n.toString().split("").map(Number);
}

/**
 * Takes a number in a range and maps it proportionately to another range.
 * @param x - The number to map.
 * @param inMin - The minimum value of the input range.
 * @param inMax - The maximum value of the input range.
 * @param outMin - The minimum value of the output range.
 * @param outMax - The maximum value of the output range.
 * @returns The mapped number.
 */
export function map(x: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
    return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

/**
 * Calculates the factorial of a number.
 * @template T - The type of the number.
 * @param n - The number.
 * @returns The factorial of `n`.
 */
export function factorial<T extends bigint | number>(n: T): T {
    const isBigInt = (num: bigint | number): num is bigint => typeof num === "bigint";

    if (isBigInt(n)) {
        let result = 1n;

        for (let i = 2n; i <= n; i++)
            result *= i;

        return result as T;
    }

    let result = 1;

    for (let i = 2; i <= n; i++)
        result *= i;

    return result as T;
}

/**
 * Checks if a number is prime.
 * @param n - The number.
 * @returns `true` if `n` is prime, `false` otherwise.
 */
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

/**
 * Checks if a number is pandigital.
 * @param n - The number.
 * @returns `true` if `n` is pandigital, `false` otherwise.
 */
export function isPandigital(n: number): boolean {
    return range(1, Math.min(n.toString().length, 9) + 1).every((d) => n.toString().includes(String(d)));
}

/**
 * Checks if a number or string is a pallindrome.
 * @param n - The number or string.
 * @returns `true` if `n` is a pallindrome, `false` otherwise.
 */
export function isPallindrome(n: number | string): boolean {
    return n.toString() === n.toString()
        .split("")
        .reverse()
        .join("");
}

// * Factors *

/**
 * Caclulates the factors of a number.
 * @param n - The number.
 * @param proper - Whether to exclude the number itself.
 * @returns The factors of `n`.
 */
export function factors(n: number, proper: boolean = false): number[] {
    let arr: number[] = [];
    let max: number = n;

    for (let i = 1; i < max; i++) {
        if (n % i === 0) {
            arr.push(i);
            const k = n / i;

            if (i !== k)
                arr.push(k);

            max = k;
        }
    }

    arr = arr.sort((a, b) => a - b);

    if (proper)
        arr.pop();

    return arr;
}

/**
 * Calculates the prime factors of a number.
 * @param n - The number.
 * @returns The sum of the proper divisors of `n`.
 */
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

/**
 * Calculates the greatest common divisor of two numbers.
 * @param x - The first number.
 * @param y - The second number.
 * @returns The greatest common divisor of `x` and `y`.
 */
export function highestCommonFactor(x: number, y: number): number {
    while (Math.max(x, y) % Math.min(x, y) !== 0) {
        if (x > y)
            x %= y;
        else
            y %= x;
    }

    return Math.min(x, y);
}

// * Triangular numbers *

/**
 * Calculates the nth triangular number.
 * @param n - The number.
 * @returns The nth triangular number.
 */
export function triangular(n: number): number {
    return n * (n + 1) / 2;
}

/**
 * Checks if a number is triangular.
 * @param n - The number.
 * @returns `true` if `n` is triangular, `false` otherwise.
 */
export function isTriangular(n: number): boolean {
    return Math.sqrt(8 * n + 1) % 1 === 0;
}

// * Pentagonal numbers *

/**
 * Calculates the nth pentagonal number.
 * @param n - The number.
 * @returns The nth pentagonal number.
 */
export function pentagonal(n: number): number {
    return n * (3 * n - 1) / 2;
}

/**
 * Checks if a number is pentagonal.
 * @param n - The number.
 * @returns `true` if `n` is pentagonal, `false` otherwise.
 */
export function isPentagonal(n: number): boolean {
    return Math.sqrt(1 + 24 * n) % 6 === 5;
}

// * Hexagonal numbers *

/**
 * Calculates the nth hexagonal number.
 * @param n - The number.
 * @returns The nth hexagonal number.
 */
export function hexagonal(n: number): number {
    return n * (2 * n - 1);
}

/**
 * Checks if a number is hexagonal.
 * @param n - The number.
 * @returns `true` if `n` is hexagonal, `false` otherwise.
 */
export function isHexagonal(n: number): boolean {
    return (1 + Math.sqrt(8 * n + 1)) / 4 % 1 === 0;
}

// * Perfect numbers *

/**
 * Checks if a number is abundant, deficient, or perfect.
 * @param n - The number.
 * @returns The type of the number.
 */
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

/**
 * Checks if a number is perfect.
 * @param n - The number.
 * @returns `true` if `n` is perfect, `false` otherwise.
 */
export function isPerfect(n: number): boolean {
    return howPerfect(n) === "PERFECT";
}

/**
 * Checks if a number is abundant.
 * @param n - The number.
 * @returns `true` if `n` is abundant, `false` otherwise.
 */
export function isAbundant(n: number): boolean {
    return howPerfect(n) === "ABUNDANT";
}

/**
 * Checks if a number is deficient.
 * @param n - The number.
 * @returns `true` if `n` is deficient, `false` otherwise.
 */
export function isDeficient(n: number): boolean {
    return howPerfect(n) === "DEFICIENT";
}

// * Node.JS fallbacks *
/**
 * Fallback for Object.groupBy as that causes tests to fail in GitHub Actions.
 * @template T - Type of the array.
 * @param array - Array to group.
 * @param cb - Function to group by.
 * @returns Grouped array.
 */
export function groupBy<T>(array: T[], cb: (item: T, i?: number, arr?: T[]) => string): Record<string, T[]> {
    // eslint-disable-next-line no-sequences
    return array.reduce<Record<string, T[]>>((p, c, i, a) => ((p[cb(c, i, a)] ??= []).push(c), p), {});
}
