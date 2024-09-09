import { combinations, isPrime, range } from "../../utils.js";

let result = NaN;

loop: for (let i = 2; ; i++) {
    if (!isPrime(i))
        continue;

    const primeStr = i.toString();
    const indices = range(primeStr.length);
    const combos = combinations(indices);

    for (const combo of combos) {
        const family = range(10).map((digit) => {
            const number = parseInt(primeStr.split("")
                .map((d, n) => (combo.includes(n) ? digit : d)).join(""), 10);

            if (number.toString().length === primeStr.length && isPrime(number))
                return number;

            return NaN;
        }).filter((x) => !isNaN(x));

        if (family.length === 8) {
            result = family[0]!;
            break loop;
        }
    }
}

export default result;
