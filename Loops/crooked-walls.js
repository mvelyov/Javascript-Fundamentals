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
    // '2 7 4 12 6 4 4',

    // test2
    '-7 2 4 13 6 -12 8',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const numbers = gets().split(' ').map(Number);
const distances = [];

for (let i=0; i<numbers.length-1; i+=1) {
    const j=i+1;
    const distance = Math.abs(numbers[i] - [numbers[j]]);
    distances.push(distance);
}

let sum = 0;
for (let i=0; i<distances.length; i+=1) {
    if (distances[i] % 2 !== 0 || distances[i] === 'x') {
        continue;
    } 
    sum += distances[i];
    if (distances[i+1] % 2 === 0) {
        distances[i+1] = 'x';
    }
}

print(sum);
