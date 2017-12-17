/*
On the only line in the console you are given an
integer number N, showing the width of the map.

The map’s height is always 2*N - 1.
The input data will always be valid and in the
format described. There is no need to check it explicitly.

You should print the whole map on the standard output

Use the symbol “*” (asterisk) to mark the path and “.” (dot)
to illustrate the trees
*/

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
  '5',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const n = +gets();


for (let i=0; i<n; i+=1) {
    const path = Array.from({
        length: n,
    }).fill('.');
    path[i] = '*';
    console.log(path.join(''));
}

for (let i=n-2; i>=0; i-=1) {
    const path = Array.from({
        length: n,
    }).fill('.');
    path[i] = '*';
    console.log(path.join(''));
}
