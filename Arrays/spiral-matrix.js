const n = 4;

const matrix = [];
for (let i = 0; i < n; i += 1) {
    const row = Array.from({
        length: n,
    });

    matrix.push(row);
}

/*
    0 -> right
    1 -> down
    2 -> left
    3 -> up
*/

let dir = 0;
let row = 0;
let col = 0;

const rowDirs = [0, +1, 0, -1];
const colDirs = [+1, 0, -1, 0];

for (let counter = 1; counter <= n * n; counter += 1) {
    matrix[row][col] = counter;
    const nextRow = row + rowDirs[dir];
    const nextCol = col + colDirs[dir];

    if (nextRow >= n || nextRow < 0 ||
        nextCol >= n || nextCol < 0 ||
        typeof matrix[nextRow][nextCol] !== 'undefined') {
        dir += 1;
        dir %= 4;
    }

    row += rowDirs[dir];
    col += colDirs[dir];
}

for (const row of matrix) {
console.log(row.join(' '));
}
