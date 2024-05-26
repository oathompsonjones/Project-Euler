const problem = parseInt(process.argv[2], 10);
const closest50 = problem % 50 === 0 ? problem : Math.floor(problem / 50) * 50 + 50;
const closest50Minus49 = String(closest50 - 49).padStart(2, "0");
const closest10 = problem % 10 === 0 ? problem : Math.floor(problem / 10) * 10 + 10;
const closest10Minus9 = String(closest10 - 9).padStart(2, "0");
const path = `./build/${closest50Minus49}-${closest50}/${closest10Minus9}-${closest10}/${problem}.js`;
const solution = await import(path);

console.log(solution.default);
