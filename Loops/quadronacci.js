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
    '1',
    '2',
    '3',
    '4',
    '5',
    '5',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let firstNum = +gets();
let secondNum = +gets();
let thirdNum = +gets();
let fourthNum = +gets();
const row = +gets();
const column = +gets();
let result = `${firstNum} ${secondNum} ${thirdNum} ${fourthNum} `;
let finalResult = ' ';

for (let i=0; i<row*column-4; i+=1) {
    const number = firstNum + secondNum + thirdNum + fourthNum;
    result += number + ' ';
    [firstNum, secondNum, thirdNum, fourthNum] = [secondNum, thirdNum, fourthNum, number];
}

const arr = result.trim().split(' ').map(Number);

for (let i=0; i<row; i+=1) {
    finalResult = arr.splice(0, column);
    print(finalResult.join(' '));
}

