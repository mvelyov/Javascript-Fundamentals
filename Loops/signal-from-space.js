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
    'hoboobbo422222Aaao',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const message = gets().split('');
const result = [];
result.push(message[0]);

for (let i=1; i<message.length; i+=1) {
    if (message[i] === message[i-1]) {
        continue;
    } else {
        result.push(message[i]);
    }
}

print(result.join(''));
