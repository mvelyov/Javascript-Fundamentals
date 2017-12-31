/*
Recently Koci, his evil genius twin, used this weakness of
Coki and started making experiments on him. The last experiment
was successful and now Coki gained the superpower to make really
big skoks (jumps). Now, Coki is known as the masked vigilante
The Big Skok, with the cape and underwear-above-the-pants stuff.

He wants to try his newfound powers. He is in the city, and
there are really high buildings there. He wants to try to make
the longest possible sequence of jumps. Since Coki is still
pretty new at this, he can jump only on buildings that are
higher than the one he is on, and also there are not higher
buildings between. Also, Coki can jump only from left to right.

Help Coki to hone his powers!

The heights of the buildings are represented as a sequence of
numbers. You task is to find the longest sequence of jumps that
Coki can make, starting from each building.

Input
Read from the standard input

On the first line you will find the number N
The number of buildings
On the second line you will find N numbers, separated by a space
The heights of the buildings
The input will be correct and in the described format, so there
is not need to check it explicitly.

Output
Print to the standard output

On the first line, print the length of the longest sequence of jumps
On the second line, print the lengths of the sequences,
starting from each building
Constraints
The buildings will always be less than 103344
*/

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
    '6',
    '1 4 2 6 3 4',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Stack {
    constructor(value) {
        this.vals = [];
    }
    count() {
        return this.vals.length;
    }

    push(value) {
        this.vals.push(value);
        return this;
    }
    pop() {
        const value = this.vals.pop();
        return value;
    }
    peek() {
        return this.vals[this.vals.length-1];
    }
    isEmpty() {
        return this.count() === 0;
    }
}

const numberOfJumps = +gets();
const jumps = gets().split(' ').map(Number);
const stack = new Stack();
const result = Array.from({ length: numberOfJumps });

for (let i=jumps.length-1; i>=0; i-=1) {
    if (stack.isEmpty()) {
            stack.push(jumps[i]);
            result[i] = 0;
     } else {
             if (jumps[i] < stack.peek()) {
                 stack.push(jumps[i]);
                result[i] = stack.count() - 1;
            } else if (jumps[i] === stack.peek()) {
                result[i] = stack.count() - 1;
            } else if (jumps[i] > stack.peek()) {
                    while (jumps[i] > stack.peek()) {
                    stack.pop();
                    }
                    if (jumps[i] === stack.peek()) {
                        result[i] = stack.count() - 1;
                    } else {
                    stack.push(jumps[i]);
                    result[i] = stack.count() - 1;
                    }
            }
        }
}

print(Math.max(...result));
print(result.join(' '));

