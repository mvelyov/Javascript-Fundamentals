/*
Write a method that counts how many times given
number appears in a given array. Write a test
program to check if the method is working correctly.

Input
On the first line you will receive
a number N - the size of the array
On the second line you will receive
N numbers separated by spaces - the numbers in the array
On the third line you will receive a number X

Output
Print how many times the number X appears in the array
*/

const line = +'8';
const line1 = '28 6 21 6 -7856 73 73 -56';
const line2 = +'73';
const array = line1.split(' ').map(Number);
let result = 0;

for (let i=0; i<line; i+=1) {
    if (line2 === array[i]) {
        result += 1;
    }
}
console.log(result);
