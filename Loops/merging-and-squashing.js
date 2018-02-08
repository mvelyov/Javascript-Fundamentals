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
    '5',
    '11',
    '22',
    '11',
    '22',
    '11',

    // test 2
    // '11',
    // '44',
    // '69',
    // '46',
    // '63',
    // '83',
    // '13',
    // '62',
    // '14',
    // '31',
    // '68',
    // '87',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const numbers = [];
const mergedNumbers = [];
const squashedNumbers = [];

for (let i=0; i<n; i+=1) {
    const number = gets();
    numbers.push(number);
}

for (let i=0; i<numbers.length-1; i+=1) {
    let j = i+1;
    const firstNumber = numbers[i];
    const secondNumber = numbers[j];
    const mergedNumber = firstNumber[1] + secondNumber[0];
    mergedNumbers.push(mergedNumber);

    let middleNumber = (+mergedNumber[0]) + (+mergedNumber[1]);
    if (middleNumber > 9) {
        middleNumber = middleNumber.toString();
        middleNumber = middleNumber[1];
    }
    const shuashedNumber = `${firstNumber[0]}${middleNumber}${secondNumber[1]}`;
    squashedNumbers.push(shuashedNumber);
}

print(mergedNumbers.join(' '));
print(squashedNumbers.join(' '));
