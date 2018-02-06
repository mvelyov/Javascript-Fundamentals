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
    // '2',
    // '1',
    // '5',
    // '3',

    // test 2
    '3',
    '-2',
    '-1',
    '4',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const number1 = +gets();
const number2 = +gets();
const number3 = +gets();
const numberOfLines = +gets();
const numberOfElements = (numberOfLines*(numberOfLines+1)) / 2;

const array = [];
array.push(number1);
array.push(number2);
array.push(number3);

for (let i=3; i<numberOfElements; i+=1) {
    array[i] = array[i-3] + array[i-2] + array[i-1];
}

for (let i=1; i<=numberOfLines; i+=1) {
    print(array.splice(0, i).join(' ').trim());
}

