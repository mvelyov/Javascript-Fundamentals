/*
Write a program that, for a given two numbers N and x,
calculates the sum S = 1 + 1!/x + 2!/x2 + … + N!/xN.
Use only one loop. Print the result with 5 digits after
the decimal point.
*/

const number = 5;
const x = -4;
let finalSum = 1;


const fact = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * fact(n - 1);
};

for (let i=1; i<=number; i+=1) {
    finalSum += (fact(i) / x**i);
}

console.log(finalSum.toFixed(5));
