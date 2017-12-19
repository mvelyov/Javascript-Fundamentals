/*
There are two things that cats love most:
1) sleeping and 2) attending beauty contests.
The most important thing for each female cat is
the contest “Miss Cat”. There are always ten cats
that participate in the final round of the contest,
numbered 1 to 10.

The jury of the contest consists of N people who
subjectively decide which cat to vote for. In other
words each person votes for just 1 cat that he has most
liked, or from whose owner he has received the biggest bribe.
The winner of the contest is the cat that has gathered most
votes. If two cats have equal votes, the winner of the
contest is the one whose number is smaller.

Your task is to write a computer program that finds the
number of the cat that is going to win the contest “Miss cat”

Input
Read from the standard input
The number N is on the first input line.
An integer between 1 and 10 is written on each
of the next N lines (this is the number of the cat)

The input data will always be valid and in the
format described. There is no need to check it explicitly.

Output
Print to the standard output

On the only output line you must print the
number of the cat, which has won the contest.
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
    '7',
    '1',
    '10',
    '3',
    '4',
    '10',
    '6',
    '1',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const n = +gets();
const result = Array.from({
    length: 11,
}).fill(0);

for (let i=0; i<n; i+=1) {
    result[+gets()] += 1;
}
const finalResult = result.indexOf(Math.max(...result));
console.log(finalResult);
