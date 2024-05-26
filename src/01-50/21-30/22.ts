import { readFile } from "fs/promises";

const data = await readFile("/Users/oathompsonjones/Programming/JS/Project Euler/src/Utils/p022_names.txt", "utf-8");
const names = data.replace(/"/ug, "").split(",")
    .sort()
    .map((name) => ({
        ascii: 0,
        score: 0,
        value: name,
    }));

names.forEach((name) => {
    for (let i = 0; i < name.value.length; i++)
        name.ascii += name.value.charCodeAt(i) - 64;
    name.score = name.ascii * (names.map((n) => n.value).indexOf(name.value) + 1);
});

export default names.map((name) => name.score).reduce((a, b) => a + b);
