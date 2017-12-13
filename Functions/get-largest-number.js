/*
Write a method GetMax()
with two parameters that returns the larger
of two integers. Write a program that reads 3
integers from the console and prints the largest
of them using the method GetMax().

Input
On the first line you will receive 3 integers separated by spaces

Output
Print the largest of them
*/

const line = '7 19 19';
const array = line.split(' ').map(Number);
let result;

const GetMax = (m, ...n) => {
  result = Math.max(m, ...n);
  return result;
};

console.log(GetMax(array[0], array[1], array[2]));
