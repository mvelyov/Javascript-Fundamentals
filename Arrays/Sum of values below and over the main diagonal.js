let matrix = [
    [1,2,3,4,5],
    [6,7,8,9,1],
    [2,3,4,5,6],
    [7,8,9,1,2],
    [3,4,5,6,7],
  ];

  // sum of values below the main diagonal (without main diagonal)
 let sum = 0;
  for (let row=0; row<matrix.length; row+=1){
    for (let column=0; column<row; column+=1){
      sum += matrix[row][column];
    }
  }
  console.log(sum);

  // sum of values below the main diagonal (with main diagonal)
  let sum1 = 0;
  for (let row=0; row<matrix.length; row+=1){
    for (let column=0; column<=row; column+=1){
      sum1 += matrix[row][column];
    }
  }
  console.log(sum1);

  // sum of values over the main diagonal (without main diagonal)
  let sum2 = 0;
  for(let row=0; row<matrix.length; row+=1){
    for (let column=row+1; column<matrix[row].length; column+=1){
        sum2 += matrix[row][column];
        }
  }
  console.log(sum2);

  // sum of values over the main diagonal (with main diagonal)
  let sum3 = 0;
  for(let row=0; row<matrix.length; row+=1){
    for (let column=row ; column<matrix[row].length; column+=1){
      sum3 += matrix[row][column];
    }
  }
  console.log(sum3);

  