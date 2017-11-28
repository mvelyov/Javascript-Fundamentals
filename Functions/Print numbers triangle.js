const printLine = (number) => {
let line = "";
for (let i=1;i<=number;i+=1){
    line += i + " ";
    console.log(line)
   }
};

printLine(3)

console.log("-".repeat(30))

const printLine1 = (n) => {
    let line = '';
    for (let i = 1; i < n + 1; i += 1) {
        line += `${i} `;
        console.log(line.trim());
    }
};

printLine1(3)