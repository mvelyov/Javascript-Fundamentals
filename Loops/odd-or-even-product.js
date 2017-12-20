/*
You are given N integers (given in a single line,
separated by a space).
Write a program that checks whether the product
of the odd elements is equal to the product of
the even elements.
Elements are counted from 1 to N, so the first
element is odd, the second is even, etc.
*/


const number = 5;
const input = '2 1 1 6 3';
const numbers = (input.split(' ').map(Number));
let productOdd = 1;
let productEven = 1;
let result;


for (let i=0; i<number; i+=1) {
   if (i % 2 === 0) {
       productOdd *= numbers[i];
   } else {
       productEven *= numbers[i];
   }
}

if (productOdd === productEven) {
    result = `yes ${productOdd}`;
} else {
    result = `no ${productOdd} ${productEven}`;
}
console.log(result);

