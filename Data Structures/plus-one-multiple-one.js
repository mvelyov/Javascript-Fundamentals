/*
We are given the following sequence:

S1 = N;
S2 = S1 + 1;
S3 = 2*S1 + 1;
S4 = S1 + 2;
S5 = S2 + 1;
S6 = 2*S2 + 1;
S7 = S2 + 2;
Your task is to write a program, that by given
N and M, finds the Mth member of the sequence

Input
Read from the standard input
On the first line find the numbers N and M,
separated by a whitespace
Output
Print to the standard output
On the single line print the Mth member of the sequence
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
    '2 22',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


class Stack {
    constructor(value) {
        this.values = [];
    }
    push(value) {
        this.values.push(value);
        return this;
    }
    peek() {
        return this.values[this.values.length-1];
    }
}

const [n, m] = gets().split(' ').map(Number);
const finalResult = new Stack();
const numbersSequence = [];
numbersSequence.push(n);

for (let i=0; i<m; i+=1) {
    const s = numbersSequence.shift();
    finalResult.push(s);
    numbersSequence.push(s + 1);
    numbersSequence.push((2 * s) + 1);
    numbersSequence.push(s + 2);
}

print(finalResult.peek());

