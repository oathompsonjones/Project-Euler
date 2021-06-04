const fs = require("fs");
const path = "/Users/oathompsonjones/Programming/JS/Project Euler/Utils/p022_names.txt";
fs.readFile(path, "utf8", (err, data) => {
    if (err) return console.log(err);
    const names = data.replace(/"/g, "").split(",").sort().map((name) => ({ value: name, ascii: 0, score: 0 }));
    names.forEach((name) => {
        for (let i = 0; i < name.value.length; i++) name.ascii += (name.value.charCodeAt(i) - 64);
        name.score = name.ascii * (names.map((name) => name.value).indexOf(name.value) + 1);
    });
    console.log(names.map((name) => name.score).reduce((a, b) => a + b));
});