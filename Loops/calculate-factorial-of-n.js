/*

Calculate N! (Factorial of N)

*/
const number = 5;
const fact = number;
let result = 1;

for (let current=1; current<=fact; current+=1) {
    result *= current;
}

console.log(result);
