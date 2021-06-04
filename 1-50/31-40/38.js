const start = Date.now();

const getPandigital = (i) => {
    let str = "";
    for (let n = 1; str.length < 9; n++) str += (i * n);
    if (str.length > 9) return NaN;
    for (let j = 1; j <= 9; j++) if (!str.includes(j.toString())) return NaN;
    return parseInt(str);
};
const pandigitals = Array(1e6).fill(0).map((x, i) => getPandigital(i)).filter((i) => !isNaN(i));
console.log(pandigitals.reduce((a, b) => Math.max(a, b)));

console.log(`${Date.now() - start}ms`);