const arrPythag = [];

for (let i = 1; i <= 1000; i++)
    arrPythag.push(i);
const allTriplets = [];

for (const i of arrPythag) {
    for (const k of arrPythag) {
        for (const p of arrPythag) {
            const aSquared = i ** 2;
            const bSquared = k ** 2;
            const cSquared = p ** 2;

            if (aSquared + bSquared === cSquared && i + k + p === 1000)
                allTriplets.push([i, k, p]);
        }
    }
}

export default allTriplets[0]![0]! * allTriplets[0]![1]! * allTriplets[0]![2]!;

