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
    // test 1
    // '5',
    // '1 1 1 1 1',
    // '1 1 1 1 1',
    // '1 1 1 1 1',
    // '1 1 1 1 1',
    // '1 1 1 1 1',

    // test 2
    // '6',
    // '9 9 9 2 2 2',
    // '9 9 9 2 2 2',
    // '9 9 9 2 2 2',
    // '9 9 9 2 2 2',
    // '9 9 9 2 2 2',
    // '9 9 9 2 2 2',

    // test 3
    '8',
    '3 2 1 1 2 3 0 1',
    '2 1 1 9 7 6 4 0',
    '1 4 1 7 7 7 5 1',
    '2 4 1 4 2 7 1 1',
    '3 4 1 4 7 1 3 1',
    '0 4 4 4 7 4 5 1',
    '5 8 2 4 7 3 2 1',
    '1 2 7 4 9 2 1 8',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const matrix = [];
let sum = 0;

for (let i = 0; i < n; i += 1) {
    matrix.push(gets().split(' ').map(Number));
}

const funcOne = (startRow, startCol, arr) => {
    if (startRow - 2 < 0 || startRow + 2 >= n) {
        return;
    }
    if (arr[startRow][startCol] === 1 &&
        arr[startRow - 1][startCol + 1] === 1 &&
        arr[startRow - 2][startCol + 2] === 1 &&
        arr[startRow - 1][startCol + 2] === 1 &&
        arr[startRow][startCol + 2] === 1 &&
        arr[startRow + 1][startCol + 2] === 1 &&
        arr[startRow + 2][startCol + 2] === 1) {
        sum +=1;
    }
};

const funcTwo = (startRow, startCol, arr) => {
    if (startRow - 1 < 0 || startRow + 3 >= n) {
        return;
    }
    if (arr[startRow][startCol] === 2 &&
        arr[startRow - 1][startCol + 1] === 2 &&
        arr[startRow][startCol + 2] === 2 &&
        arr[startRow + 1][startCol + 2] === 2 &&
        arr[startRow + 2][startCol + 1] === 2 &&
        arr[startRow + 3][startCol] === 2 &&
        arr[startRow + 3][startCol + 1] === 2 &&
        arr[startRow + 3][startCol + 2] === 2) {
        sum +=2;
    }
};

const funcThree = (startRow, startCol, arr) => {
    if (startRow + 4 >= n) {
        return;
    }
    if (arr[startRow][startCol] === 3 &&
        arr[startRow][startCol + 1] === 3 &&
        arr[startRow][startCol + 2] === 3 &&
        arr[startRow + 1][startCol + 2] === 3 &&
        arr[startRow + 2][startCol + 1] === 3 &&
        arr[startRow + 2][startCol + 2] === 3 &&
        arr[startRow + 3][startCol + 2] === 3 &&
        arr[startRow + 4][startCol] === 3 &&
        arr[startRow + 4][startCol + 1] === 3 &&
        arr[startRow + 4][startCol + 2] === 3) {
        sum+=3;
    }
};

const funcFour = (startRow, startCol, arr) => {
    if (startRow + 4 >= n) {
        return;
    }
    if (arr[startRow][startCol] === 4 &&
        arr[startRow + 1][startCol] === 4 &&
        arr[startRow + 2][startCol] === 4 &&
        arr[startRow + 2][startCol + 1] === 4 &&
        arr[startRow][startCol + 2] === 4 &&
        arr[startRow + 1][startCol + 2] === 4 &&
        arr[startRow + 2][startCol + 2] === 4 &&
        arr[startRow + 3][startCol + 2] === 4 &&
        arr[startRow + 4][startCol + 2] === 4) {
        sum +=4;
    }
};

const funcFive = (startRow, startCol, arr) => {
    if (startRow + 4 >= n) {
        return;
    }
    if (arr[startRow][startCol] === 5 &&
        arr[startRow][startCol + 1] === 5 &&
        arr[startRow][startCol + 2] === 5 &&
        arr[startRow + 1][startCol] === 5 &&
        arr[startRow + 2][startCol] === 5 &&
        arr[startRow + 2][startCol + 1] === 5 &&
        arr[startRow + 2][startCol + 2] === 5 &&
        arr[startRow + 3][startCol + 2] === 5 &&
        arr[startRow + 4][startCol + 2] === 5 &&
        arr[startRow + 4][startCol + 1] === 5 &&
        arr[startRow + 4][startCol] === 5) {
        sum +=5;
    }
};

const funcSix = (startRow, startCol, arr) => {
    if (startRow + 4 >= n) {
        return;
    }
    if (arr[startRow][startCol] === 6 &&
        arr[startRow][startCol + 1] === 6 &&
        arr[startRow][startCol + 2] === 6 &&
        arr[startRow + 1][startCol] === 6 &&
        arr[startRow + 2][startCol] === 6 &&
        arr[startRow + 2][startCol + 1] === 6 &&
        arr[startRow + 2][startCol + 2] === 6 &&
        arr[startRow + 3][startCol] === 6 &&
        arr[startRow + 3][startCol + 2] === 6 &&
        arr[startRow + 4][startCol] === 6 &&
        arr[startRow + 4][startCol + 1] === 6 &&
        arr[startRow + 4][startCol + 2] === 6) {
        sum +=6;
    }
};

const funcSeven = (startRow, startCol, arr) => {
    if (startRow + 4 >= n) {
        return;
    }
    if (arr[startRow][startCol] === 7 &&
        arr[startRow][startCol + 1] === 7 &&
        arr[startRow][startCol + 2] === 7 &&
        arr[startRow + 1][startCol + 2] === 7 &&
        arr[startRow + 2][startCol + 1] === 7 &&
        arr[startRow + 3][startCol + 1] === 7 &&
        arr[startRow + 4][startCol + 1] === 7) {
        sum+=7;
    }
};

const funcEight = (startRow, startCol, arr) => {
    if (startRow + 4 >= n) {
        return;
    }
    if (arr[startRow][startCol] === 8 &&
        arr[startRow][startCol + 1] === 8 &&
        arr[startRow][startCol + 2] === 8 &&
        arr[startRow + 1][startCol] === 8 &&
        arr[startRow + 1][startCol + 2] === 8 &&
        arr[startRow + 2][startCol + 1] === 8 &&
        arr[startRow + 3][startCol] === 8 &&
        arr[startRow + 3][startCol + 2] === 8 &&
        arr[startRow + 4][startCol] === 8 &&
        arr[startRow + 4][startCol + 1] === 8 &&
        arr[startRow + 4][startCol + 2] === 8) {
        sum+=8;
    }
};

const funcNine = (startRow, startCol, arr) => {
    if (startRow + 4 >= n) {
        return;
    }
    if (arr[startRow][startCol] === 9 &&
        arr[startRow][startCol + 1] === 9 &&
        arr[startRow][startCol + 2] === 9 &&
        arr[startRow + 1][startCol] === 9 &&
        arr[startRow + 1][startCol + 2] === 9 &&
        arr[startRow + 2][startCol + 1] === 9 &&
        arr[startRow + 2][startCol + 2] === 9 &&
        arr[startRow + 3][startCol + 2] === 9 &&
        arr[startRow + 4][startCol] === 9 &&
        arr[startRow + 4][startCol + 1] === 9 &&
        arr[startRow + 4][startCol + 2] === 9) {
        sum+=9;
    }
};


for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
        if (matrix[i][j] === 0) {
            continue;
        } else if (matrix[i][j] === 1) {
            funcOne(i, j, matrix);
        } else if (matrix[i][j] === 2) {
            funcTwo(i, j, matrix);
        } else if (matrix[i][j] === 3) {
            funcThree(i, j, matrix);
        } else if (matrix[i][j] === 4) {
            funcFour(i, j, matrix);
        } else if (matrix[i][j] === 5) {
            funcFive(i, j, matrix);
        } else if (matrix[i][j] === 6) {
            funcSix(i, j, matrix);
        } else if (matrix[i][j] === 7) {
            funcSeven(i, j, matrix);
        } else if (matrix[i][j] === 8) {
            funcEight(i, j, matrix);
        } else if (matrix[i][j] === 9) {
            funcNine(i, j, matrix);
        }
    }
}

print(sum);
