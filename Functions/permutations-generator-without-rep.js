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
  '4',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const generatePermutations = (n, index, permutation, used ) => {
    if (index === n) {
        print(permutation.join(' '));
        return;
    }
    for (let i=0; i<n; i+=1) {
        permutation[index] = i+1;
        if (used[i]) {
            continue;
        }
        used[i] = true;
        generatePermutations(n, index+1, permutation, used);
        used[i] = false;
    }
 };

const n = +gets();
const permutation = Array.from({ length: n });
const used = Array.from({ length: n });
generatePermutations(n, 0, permutation, used);
