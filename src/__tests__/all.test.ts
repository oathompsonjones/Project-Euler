import { beforeAll, test } from "vitest";
import answers from "./answers.json" with { type: "json" };
import { getProblemPath } from "../run.js";

const solutions = [NaN];

beforeAll(async () => {
    console.time("Total time taken");
    for (let i = 1; i < answers.length + 1; i++) {
        console.time(`Problem ${i}/${answers.length}`);
        // eslint-disable-next-line no-await-in-loop
        const { default: solution } = await import(getProblemPath(i, true)) as { default: number; };

        console.timeEnd(`Problem ${i}/${answers.length}`);
        solutions.push(solution);
    }
    console.timeEnd("Total time taken");
}, Infinity);

test.for(answers.map((answer, i) => [i + 1, answer]))("Problem %s", ([problem, answer], { expect }) => {
    expect(solutions[problem!]).toBe(answer);
});
