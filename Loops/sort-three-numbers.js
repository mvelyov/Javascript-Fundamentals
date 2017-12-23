/*
Write a program that enters 3 real numbers
and prints them sorted in descending order.
Use nested if statements.
_Don’t use arrays and the built-in sorting functionality._
*/

const number1 = 20;
const number2 = 0;
const number3 = 20;
let result;

if (number1>=number2 && number1>=number3) {
    if (number2>=number3) {
        result = `${number1} ${number2} ${number3}`;
    } else {
        result = `${number1} ${number3} ${number2}`;
    }
} else if (number2>=number1 && number2>=number3) {
    if (number1>=number3) {
        result = `${number2} ${number1} ${number3}`;
    } else {
        result = `${number2} ${number3} ${number1}`;
    }
} else {
    if (number1>=number2) {
        result = `${number3} ${number1} ${number2}`;
    } else {
        result = `${number3} ${number2} ${number1}`;
    }
}
console.log(result);
