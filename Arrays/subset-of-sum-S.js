/*
We are given an array of integers and a number S.
Write a program to find if there exists a subset
of the elements of the array that has a sum S.
Output
Print on the standard output
On the single line print "yes" or "no"
*/

const s = 14;
const numbers = [2, 1, 2, 4, 3, 5, 2, 6];
const sums = Array.from({
    length: s + 1,
    })
    .fill(false);
sums[0] = true;
let result;

for (const number of numbers) {
    for (let sum=s; sum>=0; sum-=1) {
        if (sums[sum]) {
            const newSum = sum + number;
            if (sums[sum]>s) {
                continue;
            }
            sums[newSum] = true;
        }
    }
}

if (sums[s] === true) {
    result = 'yes';
} else {
    result = 'no';
}


console.log(result);
