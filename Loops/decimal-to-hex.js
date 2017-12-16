const decimal = 338583669684;
const hexSystem = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
let number = decimal;
const result = [];

do {
  result.unshift(hexSystem[number % 16]);
  number = Math.floor((number / 16));
  } while (number>=1);


console.log(result.join(''));


