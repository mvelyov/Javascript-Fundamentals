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
  '8',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const triangularNumber = (Math.sqrt(8*n+1) - 1) / 2;
const output = Math.trunc(triangularNumber);
print(output);


