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
    'set 2',
    'print',
    'front-add 1',
    'print',
    'back-add 2',
    'print',
    'front-remove',
    'print',
    'set 4',
    'print',
    'print',
    'front-add 1',
    'print',
    'back-add 3',
    'print',
    'reverse',
    'print',
    'end',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let numbers = [];

while (true) {
    const [command, number] = gets().split(' ');
    if (command === 'set') {
        numbers = Array.from(number);
    } else if (command === 'front-add') {
        numbers.unshift(number);
    } else if (command === 'back-add') {
        numbers.push(number);
    } else if (command === 'front-remove') {
        numbers.shift();
    } else if (command === 'back-remove') {
        numbers.pop();
    } else if (command === 'reverse') {
        numbers = numbers.reverse();
    } else if (command === 'print') {
        print(numbers.join(''));
    } else if (command === 'end') {
        break;
    }
}