/*
Using loops write a program that converts
an integer number to its binary representation.
The input is entered as long. The output should
be a variable of type string.
*/

const decimal = 43691;
let number = decimal;
const binary = [];

do {
  binary.unshift(number % 2);
  number = number/2 | 0;
} while (number >= 1);

console.log(binary.join(''));

