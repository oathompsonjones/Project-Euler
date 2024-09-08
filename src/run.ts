// @ts-check
import { fileURLToPath } from "url";

/**
 * Gets the path to a problem file.
 * @param problem - The problem number.
 * @param src - Whether to get the source file path.
 * @returns The path to the problem file.
 */
export function getProblemPath(problem: number, src: boolean = false): string {
    const closest50 = problem % 50 === 0 ? problem : Math.floor(problem / 50) * 50 + 50;
    const closest50Minus49 = String(closest50 - 49).padStart(2, "0");
    const closest10 = problem % 10 === 0 ? problem : Math.floor(problem / 10) * 10 + 10;
    const closest10Minus9 = String(closest10 - 9).padStart(2, "0");

    const dir = src ? "src" : "build";
    const ext = src ? "ts" : "js";
    const file = problem.toString().padStart(2, "0");

    return `${dir}/${closest50Minus49}-${closest50}/${closest10Minus9}-${closest10}/${file}.${ext}`;
}

const fileArg = process.argv[1]?.endsWith(".js") ?? false ? process.argv[1] : `${process.argv[1]}.js`;

if (fileArg === fileURLToPath(import.meta.url)) {
    const problem = parseInt(process.argv[2] ?? "", 10);

    if (isNaN(problem)) {
        console.error("Invalid problem number");
        process.exit(1);
    }

    console.time("Time taken");
    console.log(`Problem ${problem}:`, (await import(`../${getProblemPath(problem)}`) as { default: number; }).default);
    console.timeEnd("Time taken");
}
