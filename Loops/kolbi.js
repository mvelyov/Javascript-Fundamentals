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
  '100 90',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets();
const n = input.split(' ').map(Number)[0];
const quantity = input.split(' ').map(Number)[1];
let sum = 0;
let result;

for (let i=0; i<n; i+=1) {
    while (sum <= quantity) {
    sum += i;
    result = i+1;
    break;
    }
}

if (result % 2 === 0) {
    result += 1;
}
console.log(result);
