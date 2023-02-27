const arrPythag = [];
for (let i = 1; i <= 1000; i++)
    arrPythag.push(i);
const allTriplets = [];
for (let i = 0; i < arrPythag.length; i++) {
    for (let k = 0; k < arrPythag.length; k++) {
        for (let p = 0; p < arrPythag.length; p++) {
            const aSquared = arrPythag[i] ** 2;
            const bSquared = arrPythag[k] ** 2;
            const cSquared = arrPythag[p] ** 2;
            if (aSquared + bSquared === cSquared && arrPythag[i] + arrPythag[k] + arrPythag[p] === 1000)
                allTriplets.push([arrPythag[i], arrPythag[k], arrPythag[p]]);
        }
    }
}
const product = allTriplets[0][0] * allTriplets[0][1] * allTriplets[0][2];
console.log(product);
