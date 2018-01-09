/*
The loaded resources must be printed following the rules:

If resource Y depends on resource X, Y must be printed after X.
If resources X and Y are equally important from the above rule,
print the one smaller lexicographically
i.e. if X < Y print X then Y, else Y then X
*/

/* global Set, Map */
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
    // '8',
    // 'index.html needs main.css',
    // 'main.css needs sub1.css',
    // 'index.html needs main.js',
    // 'main.css needs sub2.css',
    // 'index.html needs logo.png',
    // 'main.js needs player.png',
    // 'main.js needs partial.html',
    // 'partial.html needs partial.js',

    '11',
    'main.css needs sub1.css',
    'index.html needs main.js',
    'main.css needs sub2.css',
    'main.js needs partial.html',
    'index.html needs logo.png',
    'index.html needs sub2.css',
    'partial.html needs partial.js',
    'main.js needs player.png',
    'index.html needs main.css',
    'sub2.css needs partial.js',
    'index.html needs partial.html',
];
/* eslint-disable */
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const n = +gets();
class Resources {
    constructor() {
        this.matrix = [];
    }
    addDirectedEdge(file, depends) {
        if (!this.matrix.hasOwnProperty(file)) {
            this.matrix[file] = [];
        }
        this.matrix[file].push(depends);
    }
}

const goshoBrowser = new Resources();
const bestVertex = new Map();

for (let i=0; i<n; i++) {
    const currCommand = gets().split(' ');
    goshoBrowser.addDirectedEdge(currCommand[0], currCommand[2]);
    if (!bestVertex.has(currCommand[0])) {
        bestVertex.set(currCommand[0], 0);
    }
    if (!bestVertex.has(currCommand[2])) {
        bestVertex.set(currCommand[2], 1);
    } else {
        bestVertex.set(currCommand[2], bestVertex.get(currCommand[2])+1);
    }
}

const nextVertex = [];
const result = new Set();

while (bestVertex.size>0) {
    const entries = bestVertex.entries();
    const elements = [...entries];
    for (const element of elements) {
        if (element[1] === 0) {
            nextVertex.push(element[0]);
        } else {
            continue;
        }
    }
    nextVertex.sort();
    const element = nextVertex.shift();
    result.add(element);
    if (goshoBrowser.matrix.hasOwnProperty(element)) {
        const childs = [...goshoBrowser.matrix[element]];
        for (const child of childs) {
            bestVertex.set(child, bestVertex.get(child)-1);
        }
    }
    bestVertex.delete(element);
}

let finalResult = ' ';
result.forEach((element) => finalResult += element + ' ');
print(finalResult);

