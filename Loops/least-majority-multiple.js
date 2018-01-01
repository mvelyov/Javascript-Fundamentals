/*
Given five positive integers, their least
majority multiple is the smallest positive
integer that is divisible by at least three of them.

Your task is to write a program that for given
distinct integers a, b, c, d and e, returns their
least majority multiple.

For example if we have 1, 2, 3, 4 and 5 the majority
multiple of the given five numbers is 4 because it is
divisible by 1, 2, and 4.

Another example: if we have 30, 42, 70, 35 and 90 the
answer will be 210, because it is divisible
by 30, 42, 70, and 35 - four out of five numbers,
which is a majority.
*/

const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '30',
    '42',
    '70',
    '35',
    '90',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const arr = [];
for (let i=0; i<5; i+=1) {
    arr.push(+gets());
}
arr.sort((x, y) => x - y);
let number = arr[2];
let condition = true;
let result;

while (condition) {
    let count = 0;
    for (let i=0; i<5; i+=1) {
        if (number % arr[i] === 0) {
            count += 1;
            if (count === 3) {
                result = number;
                condition = false;
            }
        } else {
            count += 0;
        }
    }
    number +=1;
}
print(result);
