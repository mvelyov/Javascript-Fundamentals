/*
Write a program that prints on the console
the border of a trapezoid by given number N.

The width of the top side of the trapezoid
must be exactly N.

The width of the bottom side of the trapezoid
must be exactly 2 * N.

The height of the trapezoid must be exactly N + 1.

Also the top right and the bottom right angle of
the trapezoid must be equal to 90 degrees.
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
  '10',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const rowsLength = n*2;
const line = Array.from({ length: rowsLength }).fill('*');
let firstRow = line.join('');
const lastRow = line.join('');

for (let i=0; i<rowsLength/2; i+=1) {
    firstRow = firstRow.substr(0, i) + '.' + firstRow.substr(i + 1);
}

print(firstRow);
for (let i=n-1; i>0; i-=1) {
    const arr = Array.from({ length: n*2-1 }). fill('.');
    const rows = arr.join('');
    const row = rows.substr(0, i) + '*' + rows.substr(i + 1) + '*';
    print(row);
}
print(lastRow);

