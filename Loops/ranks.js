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
  '5',
  '0 -5 4 -11 1',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const inputSequence = gets().split(' ').map(Number);
const sortedSequence = inputSequence.slice().sort((x, y) => x-y);
const finalSequence = new Map();
let finalResult = '';

for (let i=1; i<=sortedSequence.length; i+=1) {
    finalSequence[sortedSequence[i-1]] = sortedSequence.length-i+1;
}

for (let i=0; i<inputSequence.length; i+=1) {
    finalResult += finalSequence[inputSequence[i]] + ' ';
}

console.log(finalResult);

