import { isPandigital } from "../../utils.js";

export default Math.max(...Array.from({ length: 1e6 }, (_, i) => {
    let str = "";

    for (let n = 1; (str + i * n).length <= 9; n++)
        str += i * n;

    return parseInt(str, 10);
}).filter(isPandigital));
