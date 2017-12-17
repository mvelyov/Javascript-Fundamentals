/*
Write a program that finds all prime
numbers in the range [1 ... N]. Use the
Sieve of Eratosthenes algorithm. The program
should print the biggest prime number which is <= N.

Input
On the first line you will receive the number N

Output
Print the biggest prime number which is <= N
*/

const n = 126;
let result;

for (let i=n; i>=2; i-=1) {
    let count = 0;
    for (let j=2; j<=Math.sqrt(n); j+=1) {
        if (i % j !== 0) {
            count += 0;
        } else {
            count = 1;
            break;
        }
    }
    if (count === 0) {
        result = i;
        break;
    }
}

console.log(result);
