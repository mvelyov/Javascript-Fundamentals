/*
Write a program that calculates with how many
zeroes the factorial of a given number N has
at its end.

Your program should work well for very big numbers,
e.g. N = 100000
*/

const line = +'100000';
let number = line;
let sum = 0;

do {
sum += Math.floor(number / 5);
number = number / 5;
} while ((number / 5) > 1 );

console.log(sum);
