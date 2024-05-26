/* eslint-disable no-await-in-loop */
import fs from "fs/promises";

let contents = "## Contents\n- [Utils](#utils)\n";
const utils = [
    "## Utils",
    "A series of utility functions which come in handy for several problems.",
    "",
    "```ts",
    await fs.readFile(`src/Utils/utils.ts`, "utf-8"),
    "```",
    "",
].join("\n");
let problems = "";

for (const folder of await fs.readdir("src")) {
    if (folder === "Utils")
        continue;

    contents += `- [Problems ${folder}](#problems-${folder})\n`;

    let subFolders = "";

    for (const subFolder of await fs.readdir(`src/${folder}`)) {
        contents += `\t- [Problems ${subFolder}](#problems-${subFolder})\n`;

        let files = "";

        for (const file of (await fs.readdir(`src/${folder}/${subFolder}`))
            .filter((f) => f.endsWith(".ts"))
            .sort(new Intl.Collator(undefined, { numeric: true, sensitivity: "base" }).compare)
        ) {
            contents += `\t\t- [Problem ${file}](#problem-${file.replace(/\./gu, "")})\n`;
            files += [
                `#### Problem ${file}`,
                "```ts",
                `${await fs.readFile(`src/${folder}/${subFolder}/${file}`, "utf-8")}`,
                "```",
                "",
            ].join("\n");
        }

        subFolders += `### Problems ${subFolder}\n${files}\n`;
    }

    problems += `## Problems ${folder}\n${subFolders}\n`;
}

await fs.writeFile("README.md", `# Project Euler
[Project Euler](https://projecteuler.net) is a website which is full of puzzles which can help develop programming skills.
This repository contains my solutions to each problem. These solutions may not all be the most efficient.
${contents}
${utils}
${problems}
`);
