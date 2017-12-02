/*

Print the numbers from 0 to 10:
 - while loop
 - for loop
*/

let number = 0;
const maxNumber = 10;

// while loop
while (number<=maxNumber) {
    console.log(number);
    number += 1;
}

// / break
console.log('-'.repeat(30));

// for loop
for (let i=0; i<=maxNumber; i+=1) {
    console.log(i);
}
