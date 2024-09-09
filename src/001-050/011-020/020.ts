import { factorial } from "../../utils.js";

const oneHundredFactorial = factorial(100n).toString();
let total = 0;

oneHundredFactorial.split("").forEach((n) => {
    total += parseInt(n, 10);
});

export default total;
