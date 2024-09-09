import { permutations } from "../../utils.js";

export default parseInt(permutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).map((p) => p.join("")).sort()[1e6 - 1]!, 10);
