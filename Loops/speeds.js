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
    '11',
    '1500',
    '4',
    '6',
    '5',
    '3',
    '3',
    '9',
    '100',
    '2',
    '3',
    '1',

    // test2
    // '4',
    // '1',
    // '1',
    // '1',
    // '1',

    // test3
    // '5',
    // '5',
    // '4',
    // '3',
    // '2',
    // '1',

    // test4
    // '5',
    // '1',
    // '2',
    // '3',
    // '4',
    // '5',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const numberOfCars = +gets();
const speedOfAllCars = [];

for (let i = 0; i < numberOfCars; i += 1) {
    speedOfAllCars.push(+gets());
}

const speed = speedOfAllCars.slice();
const maxLength = [];
for (let i = 0; i < speed.length; i += 1) {
    let j = i;
    const indeces = [];
    indeces.push(j);
    if (speed[j] < speed[j + 1]) {
        while (speed[j] < speed[j + 1]) {
            speed[j + 1] = speed[j];
            j += 1;
            indeces.push(j);
        }
    }
    if (maxLength[0]) {
        if (maxLength[0].length < indeces.length) {
            maxLength[0] = indeces;
        } else if (maxLength[0].length === indeces.length) {
            maxLength.push(indeces);
        }
    } else {
        maxLength.push(indeces);
    }
}

const maxInitialSpeeds = [];

for (const group of maxLength) {
    let sum = 0;
    for (const index of group) {
       sum += speedOfAllCars[index];
    }
    maxInitialSpeeds.push(sum);
}
print(Math.max(...maxInitialSpeeds));
