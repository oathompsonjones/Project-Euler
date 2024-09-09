import { isPallindrome, range, sum } from "../../utils.js";

const palindromicDecimals = range(1e6).filter(isPallindrome);
const palindromicDecimalsAsBinary = palindromicDecimals.map((d) => d.toString(2));
const palindromicBinarys = palindromicDecimalsAsBinary.filter(isPallindrome);

export default sum(palindromicBinarys.map((bin) => parseInt(bin, 2)));
