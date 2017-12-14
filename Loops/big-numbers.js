/*
Write a method that adds two positive integer numbers
represented as arrays of digits (each array element arr[i]
contains a digit; the last digit is kept in arr[0]).
Write a program that reads two arrays representing
positive integers and outputs their sum.

Input
On the first line you will receive two numbers
separated by spaces - the size of each array
On the second line you will receive the first array
On the third line you will receive the second array

Output
Print the sum as an array of digits (as described)
Digits should be separated by spaces
*/


const n = 5;
const m = 5;
const array1 = '0 3 9 3 2';
const array2 = '5 9 5 1 7';
const firstArray = array1.split(' ').map(Number);
const secondArray = array2.split(' ').map(Number);
const result = Array.from({
    length: Math.max(n, m),
}).fill(0);

for (let i=0; i<Math.max(n, m); i+=1) {
    if (typeof firstArray[i] === 'undefined' || typeof secondArray[i] === 'undefined' ) {
        if (typeof firstArray[i] === 'undefined') {
        firstArray[i] = 0;
        }
        if (typeof secondArray[i] === 'undefined') {
        secondArray[i] = 0;
        }
    }
    result[i] += (firstArray[i] + secondArray[i]);
    if (result[i] > 9) {
        result[i] = result[i] % 10;
        result[i+1] += 1;
    }
}

console.log(result.join(' '));

