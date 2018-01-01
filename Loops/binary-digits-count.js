/*
You are given a sequence of N positive integer
numbers and one binary digit B (0 or 1). Your
task is to write a program that finds the number
of binary digits (B) in each of the N numbers in
binary numeral system.

Example: 20 in the binary numeral system looks
like this: 10100. The number of binary digits 0
of the number 20 in the binary numeral system is 3.

Input
Read from the standard input

On the first input line there will be the digit B.

On the second line you must read the number N.

On each of the following N lines there is one
positive integer number written – the consequent
 number, whose sum of binary digits B we are searching for.

The input data will always be valid and in the format
described. There is no need to check it explicitly.
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
    '0',
'4',
'20',
'1337',
'2147483648',
'4000000000',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const binaryDigit = +gets();
const n = +gets();

for (let i=0; i<n; i+=1) {
    let count = 0;
    const binNumber = Number(+gets()).toString(2);
    const arr = binNumber.split('').map(Number);
    for (let j=0; j<arr.length; j+=1) {
        if (arr[j] === binaryDigit) {
            count +=1;
        }
    }
    print(count);
}

