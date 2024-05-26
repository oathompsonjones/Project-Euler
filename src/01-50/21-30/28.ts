const corners = [1];
let currentCorners = [];
let currentDifference = 2;

for (let i = 2; i <= 1001 * 1001; i++) {
    if (currentDifference === i - corners[corners.length - 1]!) {
        corners.push(i);
        currentCorners.push(i);
    }

    if (currentCorners.length === 4) {
        currentDifference += 2;
        currentCorners = [];
    }
}

export default corners.reduce((a, b) => a + b);
