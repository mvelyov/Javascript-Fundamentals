/*
Write a program that reads two double values from the console A and B,
stores them in variables and exchanges their values if the first one is
greater than the second one. Use an if-statement. As a result print the
values of the variables A and B, separated by a space.
*/


let number1 = 5;
let number2 = 3;
const number3 = number1;

if (number1>number2) {
    number1=number2;
    number2=number3;
}

console.log(number1 + ' ' + number2);


