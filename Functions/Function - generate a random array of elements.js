const randomGenerate = (number) => {
    const randomArray = [];
    for (let i=0; i<number; i+=1) {
    randomArray[i] = Math.round(( 10 * (Math.random())));
    }
    return randomArray;
};
console.log(randomGenerate(5));
