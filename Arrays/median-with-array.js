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
    // 'ADD 5',
    // 'ADD 1',
    // 'FIND',
    // 'ADD 2',
    // 'FIND',
    // 'ADD 3',
    // 'ADD 1',
    // 'FIND',
    // 'ADD 3',
    // 'FIND',
    // 'EXIT',

    'ADD 5',
    'ADD 1',
    'ADD 2',
    'FIND',
    'ADD 3',
    'FIND',
    'ADD 1',
    'FIND',
    'EXIT',
];

/* eslint-disable */
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

let exit = true;
const arr = [];
let median;
let leftMiddleIndex;
let rightMiddleIndex;
while (exit) {
    const middleIndex = Math.abs((arr.length-1) / 2);
    const [command, value] = gets().split(' ');
    if (command === 'ADD') {
        arr.push(value);
        arr.sort((x, y) => x - y);
    } else if (command === 'FIND') {
        if (middleIndex % 2 === 0) {
        median = +arr[middleIndex];
        print(median);
        } else {
        leftMiddleIndex = Math.trunc(middleIndex);
        rightMiddleIndex = Math.round(middleIndex);
        median = (+arr[leftMiddleIndex] + +arr[rightMiddleIndex]) / 2;
        print(median);
        }
    } else if (command === 'EXIT') {
        exit = false;
    }
}
