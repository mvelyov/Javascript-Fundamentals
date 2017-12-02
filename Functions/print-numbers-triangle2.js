// first option

const printLine = (number) => {
    let line = '';
    for (let i=1; i<=number; i+=1) {
        line += i + ' ';
         }
        console.log(line);
    };

const printTriangle = (number) => {
        for (let i=1; i<=number; i+=1) {
            printLine(i);
        }
        for (let i=number-1; i>=0; i-=1) {
            printLine(i);
        }
    };

printTriangle(5);

console.log('-'.repeat(30));

// second option

const printLine1 = (n) => {
    let line = '';
    for (let i = 1; i < n + 1; i += 1) {
        line += `${i} `;
    }

    console.log(line.trim());
};

const printTriangle1 = (n) => {
    for (let i = 1; i < n + 1; i += 1) {
        printLine1(i);
    }

    for (let i = n - 1; i >= 0; i -= 1) {
        printLine1(i);
    }
};

printTriangle1(5);
