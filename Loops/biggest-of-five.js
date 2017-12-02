/*
Write a program that finds the biggest of 5 numbers
that are read from the console, using only 5 if statements.
*/

const number1 = 66;
const number2 = -2;
const number3 = 66;
const number4 = 0;
const number5 = 14;
let result;

if (number1>=number2 && number1>=number3 && number1>=number4 && number1>=number5) {
    result = number1;
} else {
    if (number2>=number3 && number2>=number4 && number2>=number5) {
        result = number2;
    } else if (number3>=number4 && number3>=number5) {
        result = number3;
    } else if (number4>=number5) {
        result = number4;
    } else {
        result = number5;
    }
}

console.log(result);
