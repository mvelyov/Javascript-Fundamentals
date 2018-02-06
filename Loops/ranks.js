/* globals Map */

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
    // test1
    // '5',
    // '0 -5 4 -11 1',

    // test2
    '4',
    '1 3 4 2',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const inputSequence = gets().split(' ').map(Number);
const sortedSequence = inputSequence.slice().sort((x, y) => y-x);
const finalSequence = new Map();

inputSequence.forEach((element) => (finalSequence.set(element, 0)));

let index = 0;
sortedSequence.forEach((element) => {
    index +=1;
    finalSequence.set(element, finalSequence.get(element) + index);
});

const finalResult = [...finalSequence.values()].join(' ');
print(finalResult);

