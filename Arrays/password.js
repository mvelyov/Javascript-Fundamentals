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
  '996655 99',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const line = gets();
const n = line.split(' ')[0];
const k = line.split(' ').map(Number)[1];
const reversedNumber = Array.from(n).reverse().join('');
const division = +reversedNumber / k;
const remainder = +reversedNumber % k;
const result = division + remainder;

console.log(Math.trunc(result));

