/*
In combinatorics,
the Catalan numbers are calculated by the
following formula: catalan-formula
Write a program to calculate the Nth Catalan
number by given N
*/

const number = 15;
const result = 1;

const fact = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
  return n*fact(n-1);
};

const numerator = fact(2*number);
const denominator = fact(number+1)*fact(number);
const catalanNumber = numerator / denominator;

console.log(Math.round(catalanNumber));

