const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '5 5',
    '1 1 3 3 5',
    '-6 -7 2 -3 -1',
    '3 0 -4 5 9',
    '7 -7 0 1 0',
    '-7 -6 -4 -4 9',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [n, m] = gets().split(' ').map(Number);
const matrix = [];
let maxSumArr;

for (let i=0; i<n; i+=1) {
    matrix.push(gets().split(' ').map(Number));
}

const getMatrix = (endRow, startCol, endCol) => {
let matrixSum = [];
let sum = 0;
matrixSum = (matrix[endRow-2].slice(startCol, endCol));
matrixSum.forEach(n => sum += n);
matrixSum = (matrix[endRow-1].slice(startCol, endCol));
matrixSum.forEach(n => sum += n);
matrixSum = (matrix[endRow].slice(startCol, endCol));
matrixSum.forEach(n => sum += n);

return sum;
};

for (let endRow=2; endRow<n; endRow+=1) {
let endCol = 3;
let startCol = 0;
while (endCol <=m ) {
const sum = getMatrix(endRow, startCol, endCol);
if (sum > maxSumArr) {
    maxSumArr = sum;
    } else if (typeof maxSumArr === 'undefined') {
    maxSumArr = sum;
    }
startCol +=1;
endCol +=1;
}
}
print(maxSumArr);
