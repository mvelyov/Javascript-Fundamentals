/*
Classical play cards use the following signs to designate the card face:
2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K and A. Write a program that enters a string
and prints "yes CONTENT_OF_STRING" if it is a valid card sign
or "no CONTENT_OF_STRING" otherwise.
*/

const card = '1010';
const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let result;

for (let i=0; i<cards.length; i+=1) {
  if (card === cards[i]) {
    result = 'yes ' + card;
    break;
  } else {
    result = 'no ' + card;
  }
}

console.log(result);


