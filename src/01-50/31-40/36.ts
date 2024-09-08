const palindromicDecimals = Array(1000000).fill(0)
    .map((_, i) => i.toString())
    .filter((i) => i.split("").reverse()
        .join("") === i);
const palindromicDecimalsAsBinary = palindromicDecimals.map((str) => parseInt(str, 10).toString(2));
const palindromicBinarys = palindromicDecimalsAsBinary.filter((i) => i.split("").reverse()
    .join("") === i);

export default palindromicBinarys.map((bin) => parseInt(bin, 2)).reduce((a, b) => a + b);
