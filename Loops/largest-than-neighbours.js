/*
Write a method that checks if the element at
given position in given array of integers is
larger than its two neighbours (when such exist).
Write program that reads an array of numbers and
prints how many of them are larger than their neighbours.
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
    '6',
    '-26 -25 -28 31 2 27',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const array = gets().split(' ').map(Number);
let counter = 0;

for (let i=0; i<array.length; i+=1) {
    if (array[i+1] > array[i] && array[i+1] > array[i+2]) {
        counter += 1;
    } else if (typeof array[i+1] ==='undefined' ||
                typeof array[i+2] === 'undefined') {
                    continue;
                }
}

print(counter);
