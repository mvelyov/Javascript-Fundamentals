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
    '7',
    'P4 P2 P3 M1 K2 P1 K1',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const n = +gets();
const jedi = gets().split(' ');

const m = [];
const k = [];
const p = [];
let finalResult = [];

for (let i = 0; i < jedi.length; i+=1) {
    if (jedi[i][0] === 'M') {
        m.push(jedi[i]);
    } else if (jedi[i][0] === 'K') {
        k.push(jedi[i]);
    } else if (jedi[i][0] === 'P') {
        p.push(jedi[i]);
    }
}

finalResult = [...m, ...k, ...p].join(' ');
print(finalResult);

