/*
Write a program that enters from the console a positive integer n and prints all the numbers from 1 to N inclusive, 
on a single line, separated by a whitespace.
*/

const number = 5;
let result = [];

for(let i=0; i<number; i+=1) {
    result[i] = i+1;
}

console.log(result.join(" "));

