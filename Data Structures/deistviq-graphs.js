/* global Map, Set */

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
    '5 5',
    '0 3',
    '2 1',
    '1 4',
    '1 3',
    '4 3',
    // '8 3',
    // '0 7',
    // '0 4',
    // '7 4',
];

/* eslint-disable */
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

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

const [n, m] = gets().split(' ').map(Number);
const bestVertex = new Map();
const vertices = new Resources();

for (let i=0; i<n; i+=1) {
    bestVertex.set(i, 0);
}

for (let i=0; i<m; i+=1) {
    const [key, value] = gets().split(' ').map(Number);
    bestVertex.set(value, bestVertex.get(value)+1);
    vertices.addDirectedEdge(key, value);
}


const result = new Set();
const nextVertex = new Set();
let nextElement;
let next;
while (bestVertex.size>0) {
    const bestVertexEntries = [...bestVertex.entries()];
    for (let i=0; i<bestVertexEntries.length; i+=1) {
        if (bestVertexEntries[i][1] === 0) {
            nextVertex.add(bestVertexEntries[i][0]);
        } else {
            continue;
        }
    }
    nextElement = [...nextVertex.values()];
    nextElement.sort((x, y) => y-x);
    next = nextElement.pop();
    result.add(next);
    if (vertices.matrix.hasOwnProperty(next)) {
        const childs = [...vertices.matrix[next]];
        if (typeof childs !== 'undefined') {
        for (const child of childs) {
            bestVertex.set(child, bestVertex.get(child)-1);
        }
    }
    }
    bestVertex.delete(next);
    nextVertex.delete(next);
}

result.forEach((x) => print(x));

