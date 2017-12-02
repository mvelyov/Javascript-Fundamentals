/*
Write a program that reads from the console a positive integer N
and prints all the numbers from 1 to N not divisible by 3 or 7,
on a single line, separated by a space.
*/

const number = 10;
const array = [];
const result = [];
const finalResult = [];


for (let i=1; i<=number; i+=1) {
  array[i-1] = i;
}
for (let i=0; i<array.length; i+=1) {
    if (array[i]%3 !== 0 ) {
    result.push(array[i]);
     }
}
for (let i=0; i<result.length; i+=1) {
    if (result[i]%7 !== 0 ) {
    finalResult.push(result[i]);
     }
}

console.log(finalResult.join(' '));
