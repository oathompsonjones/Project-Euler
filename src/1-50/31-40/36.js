const palindromicDecimals = Array(1000000).fill(0).map((x, i) => i.toString()).filter((i) => i.split("").reverse().join("") === i);
const stringToBinary = (str) => parseInt(str).toString(2);
const palindromicDecimalsAsBinary = palindromicDecimals.map(stringToBinary);
const palindromicBinarys = palindromicDecimalsAsBinary.filter((i) => i.split("").reverse().join("") === i);
console.log(palindromicBinarys.map((bin) => parseInt(bin, 2)).reduce((a, b) => a + b));