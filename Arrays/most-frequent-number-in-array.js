const array = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
const result = [];
let repeatingTimes = 0;
let repeatingNumber = 0;

for (const number of array) {
    if (typeof result[number] === 'undefined') {
        result[number] = 0;
    }
    result[number] += 1;
   for (let i=0; i<result.length; i+=1) {
       if (typeof result[i] === 'undefined') {
           result[i] = 0;
       }
    }
    repeatingTimes = Math.max(...result);
    repeatingNumber = result.indexOf(repeatingTimes);
}

console.log(`${repeatingNumber} (${repeatingTimes} times)`);

