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
    // 'ADD 5',
    // 'ADD 1',
    // 'FIND',
    // 'ADD 2',
    // 'FIND',
    // 'ADD 3',
    // 'ADD 1',
    // 'FIND',
    // 'ADD 3',
    // 'FIND',
    // 'EXIT',

    'ADD 5',
    'ADD 1',
    'ADD 2',
    'FIND',
    'ADD 3',
    'FIND',
    'ADD 1',
    'FIND',
    'EXIT',
];

/* eslint-disable */
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

class MinHeap {
    constructor(compareFunc) {
        this.values = [null];
        this.compareFunc = compareFunc || ((x, y) => x < y);
    }

    get top() {
        return this.values[1];
    }

    get count() {
        return this.values.length - 1;
    }

    get isEmpty() {
        return this.count === 0;
    }

    add(value) {
        let index = this.values.length;
        this.values.push(value);

        while (index > 1 && this.compareFunc(value, this.values[index >> 1])) {
            this.values[index] = this.values[index >> 1];
            index >>= 1;
        }

        this.values[index] = value;
    }

    removeTop() {
        const value = this.values[this.values.length - 1];
        this.values.pop();

        if (!this.isEmpty) {
            this._heapifyDown(1, value);
        }
    }

    _heapifyDown(index, value) {
        while (index * 2 + 1 < this.values.length) {
            const isFirstChildBetter =
                this.compareFunc(
                    this.values[index * 2],
                    this.values[index * 2 + 1]
                );

            const smallerChildIndex = isFirstChildBetter ?
                index * 2 :
                index * 2 + 1;
            if (this.compareFunc(this.values[smallerChildIndex], value)) {
                this.values[index] = this.values[smallerChildIndex];
                index = smallerChildIndex;
            } else {
                break;
            }
        }

        if (index * 2 < this.values.length) {
            const smallerChildIndex = index * 2;
            if (this.compareFunc(this.values[smallerChildIndex], value)) {
                this.values[index] = this.values[smallerChildIndex];
                index = smallerChildIndex;
            }
        }

        this.values[index] = value;
    }
}


class MaxHeap {
    constructor(compareFunc) {
        this.values = [null];
        this.compareFunc = compareFunc || ((x, y) => y < x);
    }

    get top() {
        return this.values[1];
    }

    get count() {
        return this.values.length - 1;
    }

    get isEmpty() {
        return this.count === 0;
    }

    add(value) {
        let index = this.values.length;
        this.values.push(value);

        while (index > 1 && this.compareFunc(value, this.values[index >> 1])) {
            this.values[index] = this.values[index >> 1];
            index >>= 1;
        }

        this.values[index] = value;
    }

    removeTop() {
        const value = this.values[this.values.length - 1];
        this.values.pop();

        if (!this.isEmpty) {
            this._heapifyDown(1, value);
        }
    }

    _heapifyDown(index, value) {
        while (index * 2 + 1 < this.values.length) {
            const isFirstChildBetter =
                this.compareFunc(
                    this.values[index * 2],
                    this.values[index * 2 + 1]
                );

            const smallerChildIndex = isFirstChildBetter ?
                index * 2 :
                index * 2 + 1;
            if (this.compareFunc(this.values[smallerChildIndex], value)) {
                this.values[index] = this.values[smallerChildIndex];
                index = smallerChildIndex;
            } else {
                break;
            }
        }

        if (index * 2 < this.values.length) {
            const smallerChildIndex = index * 2;
            if (this.compareFunc(this.values[smallerChildIndex], value)) {
                this.values[index] = this.values[smallerChildIndex];
                index = smallerChildIndex;
            }
        }

        this.values[index] = value;
    }
}

let exit = true;
let median;
const minheap = new MinHeap();
const maxheap = new MaxHeap();
while (exit) {
    let [command, value] = gets().split(' ');
    value = +value;
            if (command === 'ADD') {
                if (maxheap.isEmpty && minheap.isEmpty) {
                maxheap.add(value);
                median = maxheap.top;
                } else {
                    if (value <= median) {
                        maxheap.add(value);
                        while (maxheap.count > minheap.count+1) {
                            const element = maxheap.top;
                            minheap.add(element);
                            maxheap.removeTop();
                        }
                        if (maxheap.count === minheap.count) {
                            median = (maxheap.top + minheap.top) / 2;
                        } else {
                            median = maxheap.top;
                        }
                    } else {
                        minheap.add(value);
                        while (minheap.count > maxheap.count) {
                            const element = minheap.top;
                            maxheap.add(element);
                            minheap.removeTop();
                        }
                        if (maxheap.count === minheap.count) {
                            median = (maxheap.top + minheap.top) / 2;
                        } else {
                            median = maxheap.top;
                    }
                }
            }
            } else if (command === 'FIND') {
                print(median);
            } else if (command === 'EXIT') {
                exit = false;
            }
}


