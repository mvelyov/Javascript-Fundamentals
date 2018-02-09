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
    // test1
    // '-11',
    // '6',
    // '-6',
    // '3',
    // '1',
    // '-9',
    // '-3',
    // '-12',
    // '-4',
    // '-6',
    // '-1',

    // test 2
    '-6',
    '6',
    '-11',
    '3',
    '1',
    '-9',
    '-4',
    '-11',
    '-1',
    '2',
    '2',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const shipX = [+gets()];
const shipY = [+gets()];
shipX.push(+gets());
shipY.push(+gets());
shipX.sort((x, y) => y - x);
shipY.sort((x, y) => y - x);

const horizon = +gets();
const catapults = [
    [+gets(), +gets()],
    [+gets(), +gets()],
    [+gets(), +gets()],
];

let damage = 0;
for (let i = 0; i < catapults.length; i += 1) {
    const shot = catapults[i];
    const shotX = shot[0];
    let shotY = Math.abs(shot[1] - horizon) + horizon;
    if (shot[1] > 0 && shipY[0] < 0 && shipY[1] < 0 ) {
        shotY = -shotY;
    } else if (shot[1] > 0 && shipY[0] > 0 && shipY[1] > 0 ) {
        shotY = shotY;
    } else if (shot[1] < 0 && shipY[0] < 0 && shipY[1] < 0 ) {
        shotY = -shotY;
    }

    if (shipX[0] > shotX &&
        shotX > shipX[1] &&
        shipY[0] > shotY &&
        shotY > shipY[1]) {
        damage += 100;
    } else if (shipX[0] > shotX &&
        shotX > shipX[1] &&
        (shipY[0] === shotY || shotY === shipY[1])) {
        damage += 50;
    } else if ((shipX[0] === shotX || shotX === shipX[1]) &&
        shipY[0] > shotY &&
        shotY > shipY[1]) {
        damage += 50;
    } else if ((shotX === shipX[0] && shotY === shipY[0]) ||
        (shotX === shipX[0] && shotY === shipY[1]) ||
        (shotX === shipX[1] && shotY === shipY[0]) ||
        (shotX === shipX[1] && shotY === shipY[1])) {
        damage += 25;
    } else {
        damage += 0;
    }
}

print(`${damage}%`);
