/*
Using loops write a program that converts a
binary integer number to its decimal form.

The input is entered as string. The output
should be a variable of type long.
_Do not use the built-in functionality.
*/

const binary = '111';
const numbers = Array.from(binary);
let decimal = 0;
let times = numbers.length-1;

for (let i=0; i<numbers.length; i+=1) {
    numbers[i] = +numbers[i];
    decimal += (numbers[i] * (2**times));
    times -= 1;
}
console.log(decimal);
