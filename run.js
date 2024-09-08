// @ts-check
import { getProblemPath } from "./build/Utils/utils.js";

const problem = parseInt(process.argv[2], 10);

if (isNaN(problem)) {
    console.error("Invalid problem number");
    process.exit(1);
}

console.time(`Time taken`);
console.log(`Problem ${problem.toString()}:`, (await import(getProblemPath(problem))).default);
console.timeEnd(`Time taken`);
