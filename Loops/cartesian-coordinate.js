/*
You are given a two-dimensional
Cartesian coordinate system and the two coordinates
(X and Y) of a point in the coordinate system. If you don't
know what Cartesian coordinate system is Google it with Bing.
As you will find, the coordinate system is divided by 2 lines
which divide the plain in four parts. Each of these parts has
a lot of points that are numbered between 1 and 4. There is
one point where our lines are crossing. This point has the
following coordinates: X=0 and Y=0. As a result this point is
numbered 0. The points on the lines are also numbered with the
numbers 5 and 6 (again see the picture below).

Your task is to write a program that finds the number of the
location of the given point in the coordinate system.
*/

const x = parseInt('4543');
const y = parseInt('-123');
let result;

if (x===0 && y===0) {
  result = 0;
} else if (x>0 && y>0) {
  result = 1;
} else if (x<0 && y>0) {
  result = 2;
} else if (x<0 && y<0) {
  result = 3;
 } else if (x>0 && y<0) {
  result = 4;
} else if (x===0 && y!==0) {
  result = 5;
} else if (x!==0 && y===0) {
  result = 6;
}
console.log(result);
