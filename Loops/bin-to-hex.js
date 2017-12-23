/*
The task is simple: convert a number 
in binary to a number in hexadecimal
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
  '110100010101100111100010011010101111001101111',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


let binNumber = gets();
const map = new Map();
map.set('0000', '0');
map.set('0001', '1');
map.set('0010', '2');
map.set('0011', '3');
map.set('0100', '4');
map.set('0101', '5');
map.set('0110', '6');
map.set('0111', '7');
map.set('1000', '8');
map.set('1001', '9');
map.set('1010', 'A');
map.set('1011', 'B');
map.set('1100', 'C');
map.set('1101', 'D');
map.set('1110', 'E');
map.set('1111', 'F');
let start = 0;
let end = 4;
let result = '';

if (binNumber.length % 4 !== 0) {
    binNumber = 0 + binNumber;
    if (binNumber.length % 4 !== 0) {
        binNumber = 0 + binNumber;
        if (binNumber.length % 4 !== 0) {
            binNumber = 0 + binNumber;
        }
    }
}

    for (let i=0; i < (binNumber.length / 4); i+=1) {
        const number = binNumber.slice(start, end);
        result += map.get(number);
        start += 4;
        end += 4;
        }

print(result);

