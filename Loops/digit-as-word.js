/*
Write a program that read a digit [0-9]
from the console, and depending on the input,
shows the digit as a word (in English).
Print "not a digit" in case of invalid input.
Use a switch statement.
*/

const number = 9;
let result;

switch (number) {
    case 0: result = 'zero'; break;
    case 1: result = 'one'; break;
    case 2: result = 'two'; break;
    case 3: result = 'three'; break;
    case 4: result = 'four'; break;
    case 5: result = 'five'; break;
    case 6: result = 'six'; break;
    case 7: result = 'seven'; break;
    case 8: result = 'eight'; break;
    case 9: result = 'nine'; break;
    default: result = 'not a digit';
}

console.log(result);
