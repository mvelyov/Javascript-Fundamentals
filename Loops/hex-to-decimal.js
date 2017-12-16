/*
Using loops write a program that converts a
hexadecimal integer number to its decimal form.
The input is entered as string. The output should
be a variable of type long.
_Do not use the built-in functionality._
*/

const hexNumber = '4ED528CBB4';
const hexSystem = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const hex = Array.from(hexNumber);
let decimalNumber = 0;
let times = hex.length-1;

for (let i=0; i<hex.length; i+=1) {
   decimalNumber += (hexSystem.indexOf(hex[i])*(16**times));
   times -= 1;
}
console.log(decimalNumber);
