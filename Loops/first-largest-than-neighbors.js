/*
Write a method that returns the index of the first
element in array that is larger than its neighbours,
or -1, if there is no such element.

Input
On the first line you will receive the number N - the size of the array
On the second line you will receive N numbers sepated by spaces - the array

Output
Print the index of the first element that is larger than its neighbours
or -1 if none are
*/

const line = +'6';
const line1 = '-26 -25 -28 31 2 27';
const array = line1.split(' ').map(Number);
let result;

for (let i=1; i<line-1; i+=1) {
  if (array[i] > array[i-1] && array[i] > array[i+1]) {
    result = array.indexOf(array[i]);
    break;
  } else {
    result = -1;
  }
}

console.log(result);
