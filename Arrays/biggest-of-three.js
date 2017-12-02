const number1 = 15;
const number2 = 71;
const number3 = 11;
let result = 0;

if (number1>number2 && number1>number3) {
result = number1;
} else if (number2>number1 && number2>number3) {
    result = number2;
} else {
    result = number3;
}


console.log(result);
