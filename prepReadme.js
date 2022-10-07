// Run this file, then run npx embedme README.md

const fs = require("fs");

const srcFolder = "src";
const foldersInSrc = fs.readdirSync(srcFolder);

const utilsFolder = foldersInSrc.pop();
const utilsFiles = fs.readdirSync(`${srcFolder}/${utilsFolder}`)
    .filter((file) => file.endsWith(".js"));
const utilsMarkdown = utilsFiles.map((file) => `
\`\`\`js
// ${srcFolder}/${utilsFolder}/${file}
\`\`\`
`).join("\n");

const problemsMarkdown = foldersInSrc.map((folder) => {
    const subFolders = fs.readdirSync(`${srcFolder}/${folder}`);
    const subFoldersMarkdown = subFolders.map((subFolder) => {
        const files = fs.readdirSync(`${srcFolder}/${folder}/${subFolder}`)
            .filter((file) => file.endsWith(".js"))
            .sort(new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare);
        const filesMarkdown = files.map((file) => {
            const fileMarkdown = `\`\`\`js\n// ${srcFolder}/${folder}/${subFolder}/${file}\n\`\`\``;
            return `#### Problem ${file}\n${fileMarkdown}`;
        }).join("\n");
        return `### Problems ${subFolder}\n${filesMarkdown}`;
    }).join("\n");
    return `## Problems ${folder}\n${subFoldersMarkdown}`;
}).join("\n");

const data = `# Project Euler
[Project Euler](https://projecteuler.net) is a website which is full of puzzles which can help develop programming skills.
This repository contains my solutions to each problem. These solutions may not all be the most efficient.
## Utils
A series of utility functions which come in handy for several problems.
${utilsMarkdown}
${problemsMarkdown}
`;

fs.writeFileSync("README.md", data);