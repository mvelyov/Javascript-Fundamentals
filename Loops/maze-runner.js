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
    // '4',
    // '7125',
    // '2846',
    // '5842',
    // '7719',

    // test2
    '2',
    '1232',
    '2523',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();

for (let i=0; i<n; i+=1) {
    const numbers = gets().split('').map(Number);
    let evenNumbers = 0;
    let oddNumbers = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            evenNumbers += number;
        } else {
            oddNumbers += number;
        }
    }
    if (evenNumbers > oddNumbers) {
        print('left');
    } else if (evenNumbers < oddNumbers) {
        print('right');
    } else {
        print('straight');
    }
}
