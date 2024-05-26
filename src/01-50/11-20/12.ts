import { factors } from "../../Utils/utils.js";

let x = 0;
let y = 1;

while (factors(x).length <= 500)
    x += y++;

export default x;
