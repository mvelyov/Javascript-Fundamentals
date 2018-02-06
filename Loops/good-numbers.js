const line = '256 768';
const input = line.split(' ').map(Number);
const n = input[0];
const m = input[1];
let goodNumbers = m-n+1;


for (let start=n; start<=m; start+=1) {
   const numbers = start.toString().replace(/[0-1]/g, '');
   for (let j=0; j<numbers.length; j+=1) {
        if (start % numbers[j] !== 0) {
                goodNumbers -=1;
                break;
            }
        }
}

console.log(goodNumbers);
