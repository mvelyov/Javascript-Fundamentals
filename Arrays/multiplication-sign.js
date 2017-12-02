/*
Write a program that shows the sign (+, - or 0) of
the product of three real numbers, without
calculating it. Use a sequence of if operators.
*/

const number = 7;
const number1 = 2;
const number2 = 1;
let result;

if (number === 0 || number1 === 0 || number2 === 0) {
    result = 0;
} else if (number<0 || number1<0 || number2<0) {
    result = '-';
   if ((number<0 && number1<0) || (number1<0 && number2<0) || (number<0 && number2<0)) {
        result = '+';
        if (number<0 && number1<0 && number2<0) {
            result = '-';
        }
    }
} else {
    result = '+';
}
console.log(result);
