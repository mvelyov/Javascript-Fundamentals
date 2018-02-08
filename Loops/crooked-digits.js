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
    '1020340567.89',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const number = gets().split('').map(Number);
const numbers = [];

for (let i = 0; i < number.length; i += 1) {
    if (isNaN(number[i])) {
        continue;
    } else {
        numbers.push(number[i]);
    }
}

const add = (arr, sum) => {
    arr.forEach((element) => {
        sum += element;
    });
    if (sum <= 9) {
        return sum;
    }
    let newArr = sum.toString();
    newArr = newArr.split('').map(Number);
    return add(newArr, 0);
};

const sum = add(numbers, 0);
print(sum);
