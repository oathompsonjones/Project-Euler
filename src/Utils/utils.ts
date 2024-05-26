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
