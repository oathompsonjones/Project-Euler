/* eslint-disable no-param-reassign */

/**
 * Generates the range [start, end].
 * @param start - The starting number.
 * @param end - The ending number.
 * @returns An array of numbers from `start` to `end`.
 */
export function range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
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
 * @param n - The number.
 * @returns The factorial of `n`.
 */
export function factorial(n: number): number {
    return Array<number>(n).fill(0)
        .map((_, i) => i + 1)
        .reduce((a, b) => a * b, 1);
}

/**
 * Calculates the greatest common divisor of two numbers.
 * @param x - The first number.
 * @param y - The second number.
 * @returns The greatest common divisor of `x` and `y`.
 */
export function hcf(x: number, y: number): number {
    while (Math.max(x, y) % Math.min(x, y) !== 0) {
        if (x > y)
            x %= y;
        else
            y %= x;
    }

    return Math.min(x, y);
}

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
    return Array.from({ length: Math.min(n.toString().length, 9) }, (_, i) => i + 1)
        .every((d) => n.toString().includes(String(d)));
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
 * Generates the rotations of a number.
 * @param n - The number.
 * @returns An array of rotations of `n`.
 */
export function rotations(n: number): number[] {
    const numbers = [];
    let num = n.toString();

    for (const _ of n.toString()) {
        numbers.push(num);
        num = `${num.split("")[num.length - 1]}${num.slice(0, num.length - 1)}`;
    }

    return numbers.map(Number);
}

/**
 * Caclulates the factors of a number.
 * @param n - The number.
 * @returns The factors of `n`.
 */
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
 * Checks if two numbers are permutations of each other.
 * @param x - The number.
 * @param y - The number.
 * @returns `true` if `x` and `y` are permutations of each other, `false` otherwise.
 */
export function arePermutations(x: number, y: number): boolean {
    const xDigits = x.toString()
        .split("")
        .map(Number);
    let yDigits = y.toString()
        .split("")
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
