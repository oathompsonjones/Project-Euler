const getPandigital = (i: number): number => {
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
};

const pandigitals = Array(1e6).fill(0)
    .map((_, i) => getPandigital(i))
    .filter((i) => !isNaN(i));

export default pandigitals.reduce((a, b) => Math.max(a, b));
