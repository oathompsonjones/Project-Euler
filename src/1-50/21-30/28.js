const corners = [1];
let currentCorners = [];
let currentDifference = 2;
for (let i = 2; i <= 1001 * 1001; i++) {
    if (i - corners[corners.length - 1] === currentDifference) {
        corners.push(i);
        currentCorners.push(i);
    }
    if (currentCorners.length === 4) {
        currentDifference += 2;
        currentCorners = [];
    }
}

console.log(corners.reduce((a, b) => a + b));
