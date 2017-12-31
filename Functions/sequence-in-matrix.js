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
    '6 8',
    '92 11 23 95 42 48 12 13',
    '09 92 23 72 95 14 17 18',
    '17 63 12 46 85 95 15 20',
    '34 12 52 92 23 95 95 95',
    '26 88 78 71 92 95 13 95',
    '26 34 16 63 39 95 14 15',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ---------------------------------------
const line = gets();
const rows = line.split(' ').map(Number)[0];
const cols = line.split(' ').map(Number)[1];
const finalResult = [];

const matrix = Array.from({
        length: rows,
    });
    for (let i = 0; i < rows; i++) {
        matrix[i] = gets().split(' ').map(Number);
    }

    const checkForEqualElement = (elements) => {
        let previous = 0;
        let next = 1;
        const arr = elements;
        let count = 1;
        let bestCount = 1;
        while (next < arr.length ) {
            if (arr[previous] === arr[next]) {
                count +=1;
                if (count > bestCount) {
                    bestCount = count;
                }
            } else {
                count = 1;
                if (count > bestCount) {
                    bestCount = count;
                }
            }
            previous +=1;
            next +=1;
        }
        return bestCount;
    };

const moveRight = (startRow) => {
    const row = startRow;
    let element;
    const matrixRow = [];
    for (let col=0; col<cols; col+=1) {
        element = matrix[row][col];
        matrixRow.push(element);
    }
    return checkForEqualElement(matrixRow);
};

const moveDown = (startCol) => {
    const col = startCol;
    let element;
    const matrixCol = [];
    for (let row=0; row<rows; row+=1) {
        element = matrix[row][col];
        matrixCol.push(element);
    }
    return checkForEqualElement(matrixCol);
};

const moveMainDiagonal = (startRow, startCol) => {
    let row = startRow;
    let col = startCol;
    let element;
    const matrixMainDiagonal = [];
    while (row < rows && col < cols) {
        element = matrix[row][col];
        matrixMainDiagonal.push(element);
        row +=1;
        col +=1;
    }
    return checkForEqualElement(matrixMainDiagonal);
};

const moveSecondaryDiagonal = (startRow, startCol) => {
    let row = startRow;
    let col = startCol;
    let element;
    const matrixSecondaryDiagonal = [];
    while (row < rows && col >=0 && col < cols ) {
        element = matrix[row][col];
        matrixSecondaryDiagonal.push(element);
        row +=1;
        col -=1;
    }
    return checkForEqualElement(matrixSecondaryDiagonal);
};

for (let i=0; i<rows; i+=1) {
    finalResult.push(moveRight(i));
    finalResult.push(moveMainDiagonal(0, i));
}

for (let i=0; i<cols; i+=1) {
    finalResult.push(moveDown(i));
    finalResult.push(moveSecondaryDiagonal(i, 5));
}

for (let i=rows-1; i>=0; i-=1) {
    finalResult.push(moveMainDiagonal(i, 0));
}

for (let i=cols-1; i>=0; i-=1) {
    finalResult.push(moveSecondaryDiagonal(0, i));
}

print(Math.max(...finalResult));


