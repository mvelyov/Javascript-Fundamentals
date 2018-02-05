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
    '2015',
    '03',
    '01',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let year = +gets();
let month = +gets();
let day = +gets();
const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

if (day === 1) {
    if (month === 3) {
        if (year === 1980 || year === 1984 || year === 1988 || year === 1992 ||
            year === 1996 || year === 2000 || year === 2004 || year === 2008 ||
            year === 2012 || year === 2016 || year === 2020) {
            month -= 2;
            day = 29;
        } else {
            month -= 2;
            day = 28;
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        month -= 2;
        day = 31;
    } else {
        if (month === 1) {
            month = 11;
            day = 31;
            year -= 1;
        } else {
            month -= 2;
            day = 30;
        }
    }
} else {
    month -= 1;
    day -= 1;
}

print(`${day}-${monthName[month]}-${year}`);
