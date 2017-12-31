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
    '0.123456',
    '1.234567',
    '2.345678',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const m = +gets();
const p = +gets();
const mathExpressionPart1 = n**2 + (1 / (m*p)) + 1337;
const mathExpressionPart2 = n - 128.523123123*p;
const mathExpressionPart3 = Math.sin(Math.trunc(m % 180));
const expression = (mathExpressionPart1 / mathExpressionPart2) + mathExpressionPart3;

print(expression.toFixed(6));


