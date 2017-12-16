/*
The task is simple:
convert a number in hexadecimal to a number in binary
Do it without conversion to decimal
*/

const line = '1A2B3C4D5E6F';
const numbers = line.split('');
const binSystem =
['0000', '0001', '0010', '0011',
'0100', '0101', '0110', '0111',
'1000', '1001', '1010', '1011',
'1100', '1101', '1110', '1111'];
let result = '';

for (let i=0; i<numbers.length; i+=1) {
    result += binSystem[parseInt(numbers[i], 16)];
}

const finalResult = result.split('');

if (finalResult[0] === '0') {
    while (finalResult[0] === '0') {
    finalResult.shift();
    }
}

console.log(finalResult.join(''));
