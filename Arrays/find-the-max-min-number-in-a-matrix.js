/*

Find the maximal and the minimal number in a matrix

*/

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 1],
  [2, 3, 4, 5, 6],
  [7, 8, 9, 1, 2],
  [3, 4, 5, 6, 7],
];

// max
let max = matrix[0][0];

for (let row=0; row<matrix.length; row+=1) {
    for (let column=0; column<matrix[row].length; column+=1) {
       max = Math.max(max, matrix[row][column]);
    }
}
console.log(max);

// break
console.log('-'.repeat(30));

// min
let min = matrix[0][0];

for (let row=0; row<matrix.length; row +=1) {
    for (let column=0; column<matrix[row].length; column+=1) {
        min = Math.min(min, matrix[row][column]);
    }
}

console.log(min);
