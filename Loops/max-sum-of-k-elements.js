/*
Write a program that reads two integer
numbers N and K and an array of N elements
from the console. Find the maximal sum of K
elements in the array.
*/
const n = 8;
const k = 3;
const array = [3, 2, 3, -2, 5, 4, 2, 7];
const sortArray = array.sort((x, y) => y-x);
let sum = 0;

for (let i=0; i<k; i+=1) {
    sum += sortArray[i];
}

console.log(sum);
