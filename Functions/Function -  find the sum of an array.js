const totalSum = (numbers) => {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
};

console.log(totalSum([1, 2, 3, 4, 5]));
