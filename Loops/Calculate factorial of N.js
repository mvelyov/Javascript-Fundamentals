/*

Calculate N! (Factorial of N)

*/
let N = 15;
let fact = N;
let result = 1;

for (let current=1 ; current<=fact; current+=1){
    result *= current
}

console.log(result)