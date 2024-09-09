import { isPentagonal, pentagonal } from "../../utils.js";

let D = 0;

loop: for (let j = 1; ; j++) {
    const pj = pentagonal(j);

    for (let k = j + 1; k < 5e3; k++) {
        const pk = pentagonal(k);

        D = Math.abs(pj - pk);

        const found = isPentagonal(pj + pk) && isPentagonal(D);

        if (found)
            break loop;
    }
}

export default D;
