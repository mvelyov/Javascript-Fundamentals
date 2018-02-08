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
    '27',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();

const testPrime = (number) => {
    if (n === 1 || n === 2) {
        return true;
    }
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

let primeNumbers = [];
for (let i = n; i >= 1; i -= 1) {
    if (testPrime(i)) {
        primeNumbers.push(i);
    }
}
primeNumbers = primeNumbers.reverse();

for (const prime of primeNumbers) {
    let result = '';
    for (let i = 1; i <= prime; i += 1) {
        if (testPrime(i)) {
            result += 1;
        } else {
            result += 0;
        }
    }
    print(result);
}
