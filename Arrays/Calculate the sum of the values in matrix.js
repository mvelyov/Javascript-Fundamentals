/*

Calculate the sum of the values in matrix

*/

const matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [2, 3, 4, 5, 6],
    [7, 8, 9, 1, 2],
    [3, 4, 5, 6, 7],
  ];
let sum = 0;

  for (let row=0; row<matrix.length; row+=1) {
      for (let column=0; column<matrix[row].length; column +=1) {
            sum += matrix[row][column];
      }
  }

console.log(sum);
