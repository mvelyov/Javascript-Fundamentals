/*
Write a program that finds the maximal
sum of consecutive elements in a given
array of N numbers.
*/

const number = 10;
const array = [2, 3, -6, -1, 2, -1, 6, 4, -8, 8];
let maxSum=0;

for (let i=0; i<number; i+=1) {
     let sum=0;
    for (let j=i; j<number; j+=1) {
         sum += array[j];
         if (sum > maxSum) {
             maxSum = sum;
            }
     }
}
console.log(maxSum);
