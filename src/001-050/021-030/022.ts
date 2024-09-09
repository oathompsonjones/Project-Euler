import { readFile } from "fs/promises";
import { sum } from "../../utils.js";

const data = await readFile("inputs/p022_names.txt", "utf-8");
const names = data.replace(/"/ug, "")
    .split(",")
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

export default sum(names.map((name) => name.score));
