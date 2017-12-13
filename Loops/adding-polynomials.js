/*
Write a method that adds two polynomials.
Represent them as arrays of their coefficients.
Write a program that reads two polynomials and prints their sum.

Input
On the first line you will receive the number N
On the second line you will receive the first
polynomial as coefficients separated by spaces
On the third line you will receive the second
polynomial as coefficients separated by spaces

Output
Print the sum of the polynomials
*/

const n = +'3';
const line1 = '5 0 1';
const line2 = '7 4 -3';
const first = line1.split(' ').map(Number);
const second = line2.split(' ').map(Number);
const result = [];

for (let i=0; i<n; i+=1) {
  result[i] = first[i] + second[i];
}

console.log(result.join(' '));
