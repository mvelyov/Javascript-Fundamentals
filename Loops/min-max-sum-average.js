/*
Write a program that reads from the console a
sequence of N real numbers and returns the minimal,
the maximal number, the sum and the average of all numbers
(displayed with 2 digits after the decimal point).
The input starts by the number N (alone in a line)
followed by N lines, each holding an real number.
The output is like in the examples below.
*/

const n = 3;
const array = [2, -1, 4];
const min = 0;
const max = 0;
let sum = 0;
const avg = 0;

for (let i=0; i<n; i+=1) {
    sum += array[i];
}

console.log('min=' + Math.min(...array).toFixed(2));
console.log('max=' + Math.max(...array).toFixed(2));
console.log('sum=' + sum.toFixed(2));
console.log('avg=' + (sum/n).toFixed(2));


