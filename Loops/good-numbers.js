const line = '42 142';
const input = line.split(' ').map(Number);
const n = input[0];
const m = input[1];
let goodNumbers = m-n+1;


for (let start=n; start<=m; start+=1) {
   const numbers = start.toString().split('').map(Number);
   for (let j=0; j<numbers.length; j+=1) {
        if (numbers[j] !== 0 &&
            numbers[j] !== 1 &&
            start % numbers[j] !== 0) {
                goodNumbers -=1;
                break;
            }
        }
}

console.log(goodNumbers);
