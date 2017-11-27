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

  let sum1 = 0;
  for(let row=matrix.length-1;row>=0; row-=1){
      for (let column=row-1; column>=0; column-=1){
          sum1 += matrix[row][column]
      }
  }
console.log(sum1);

console.log("-".repeat(30))

  // sum of values below the main diagonal (with main diagonal)
  let sum2 = 0;
  for (let row=0; row<matrix.length; row+=1){
    for (let column=0; column<=row; column+=1){
      sum2 += matrix[row][column];
    }
  }
  console.log(sum2);

  let sum3 = 0;
  for(let row=matrix.length-1;row>=0; row-=1){
      for (let column=row; column>=0; column-=1){
          sum3 += matrix[row][column]
      }
  }
console.log(sum3);

console.log("-".repeat(30))

  // sum of values over the main diagonal (without main diagonal)
  let sum4 = 0;
  for(let row=0; row<matrix.length; row+=1){
    for (let column=row+1; column<matrix[row].length; column+=1){
        sum4 += matrix[row][column];
        }
  }
  console.log(sum4);

  let sum5 = 0;
  for(let row=matrix.length-1; row>=0; row-=1){
      for (let column=matrix[row].length-1; column>row; column-=1){
          sum5 += matrix[row][column];
      }
  }
  console.log(sum5);

  console.log("-".repeat(30))
  
  // sum of values over the main diagonal (with main diagonal)
  let sum6 = 0;
  for(let row=0; row<matrix.length; row+=1){
    for (let column=row ; column<matrix[row].length; column+=1){
      sum6 += matrix[row][column];
    }
  }
  console.log(sum6);


  let sum7 = 0;
  for(let row=matrix.length-1; row>=0; row-=1){
      for (let column=matrix[row].length-1; column>=row; column-=1){
          sum7 += matrix[row][column];
      }
  }
  console.log(sum7);
  