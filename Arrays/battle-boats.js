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
    // test 1
    '2 2',
    '0 1',
    '1 1',
    '1 0',
    '1 1',
    'Shoot 1 1',
    'Shoot 0 1',
    'Shoot 0 0',
    'Shoot 0 0',
    'Shoot 1 1',
    'Shoot 1 0',
    'END',

    // test 2
    // '3 4',
    // '0 1 1 1',
    // '1 1 0 0',
    // '1 1 0 1',
    // '1 0 1 1',
    // '1 0 0 0',
    // '1 1 1 1',
    // 'Shoot 2 3',
    // 'Shoot 1 1',
    // 'Shoot 2 1',
    // 'Shoot 0 0',
    // 'Shoot 1 1',
    // 'Shoot 1 1',
    // 'Shoot 2 1',
    // 'Shoot 2 3',
    // 'END',
];

/* eslint-disable */
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const [row, col] = gets().split(' ').map(Number);
const player1 = [];
const player2 = [];

for (let i=0; i<row; i+=1) {
    const elements = gets().split(' ').map(Number);
    player1.push(elements);
}

for (let i=0; i<row; i+=1) {
    const elements = gets().split(' ').map(Number);
    player2.push(elements);
}

const shoots = [];
while (true) {
    let [command, rowShoot, colShoot] = gets().split(' ');
    if (command === 'END') {
        break;
    }
    rowShoot = +rowShoot;
    colShoot = +colShoot;
    shoots.push(command);
    const numberOfShoots = shoots.length;

    if (numberOfShoots % 2 !==0 ) {
        const damage = player2[Math.abs(rowShoot-row+1)][Math.abs(colShoot-col+1)];
        if (damage === 0) {
            print('Missed');
            player2[Math.abs(rowShoot-row+1)][Math.abs(colShoot-col+1)] = 'x';
        } else if (damage === 1) {
            print('Booom');
            player2[Math.abs(rowShoot-row+1)][Math.abs(colShoot-col+1)] = 'x';
        } else if (damage === 'x') {
            print('You already shot there!');
        }
    } else {
        const damage = player1[rowShoot][colShoot];
        if (damage === 0) {
            print('Missed');
            player1[rowShoot][colShoot] = 'x';
        } else if (damage === 1) {
            print('Booom');
            player1[rowShoot][colShoot] = 'x';
        } else if (damage === 'x') {
            print('You already shot there!');
        }
    }
}

let boatsLeftP1 = 0;
for (let i=0; i<row; i+=1) {
    for (let j=0; j<col; j+=1) {
        if (player1[i][j] === 1) {
            boatsLeftP1 +=1;
        }
    }
}

let boatsLeftP2 = 0;
for (let i=0; i<row; i+=1) {
    for (let j=0; j<col; j+=1) {
        if (player2[i][j] === 1) {
            boatsLeftP2 +=1;
        }
    }
}

print(`${boatsLeftP1}:${boatsLeftP2}`);
