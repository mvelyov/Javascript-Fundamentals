/*
Write a program that, depending on the
first line of the input, reads an int,
double or string variable.
If the variable is int or double, the program
increases it by one.
If the variable is a string, the program appends
* at the end.
Print the result at the console. Use switch statement.
On the first line you will receive the type of input
as string in the following form:
integer for int
real for double
text for string
On the second line you will be given the value of the variable.
*/

const line = 'real';
const value = '-2.50';
let result;

switch (line) {
    case 'integer': result = +value + 1; break;
    case 'real': result = (+value + 1).toFixed(2); break;
    default: result = value + '*';
}

console.log(result);

