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
    //test1
    '132',
    '123',

    //test2
    // '275',
    // '693',
    // '110',
    // '742',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let finalSum = 0;

while (true) {
    const str = gets();
    let sumMiddleNumber = +str[1];
    let sumFirstLastNumbers = +str[0] + +str[2]
    if (sumMiddleNumber === sumFirstLastNumbers) {
        finalSum += +str;
    } else {
        break;
    }
};

print(finalSum)