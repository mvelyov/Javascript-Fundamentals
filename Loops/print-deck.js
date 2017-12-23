const card = '5';
let cardSign;

if (typeof +card === 'number') {
 cardSign = +card;
}
if (typeof card === 'string') {
    if (card === 'J') {
        cardSign = 11;
    } else if (card === 'Q') {
        cardSign = 12;
    } else if (card === 'K') {
        cardSign = 13;
    } else if (card === 'A') {
        cardSign = 14;
    }
}

const matrix = [
    ['2 of spades', '2 of clubs', '2 of hearts', '2 of diamonds'],
    ['3 of spades', '3 of clubs', '3 of hearts', '3 of diamonds'],
    ['4 of spades', '4 of clubs', '4 of hearts', '4 of diamonds'],
    ['5 of spades', '5 of clubs', '5 of hearts', '5 of diamonds'],
    ['6 of spades', '6 of clubs', '6 of hearts', '6 of diamonds'],
    ['7 of spades', '7 of clubs', '7 of hearts', '7 of diamonds'],
    ['8 of spades', '8 of clubs', '8 of hearts', '8 of diamonds'],
    ['9 of spades', '9 of clubs', '9 of hearts', '9 of diamonds'],
    ['10 of spades', '10 of clubs', '10 of hearts', '10 of diamonds'],
    ['J of spades', 'J of clubs', 'J of hearts', 'J of diamonds'],
    ['Q of spades', 'Q of clubs', 'Q of hearts', 'Q of diamonds'],
    ['K of spades', 'K of clubs', 'K of hearts', 'K of diamonds'],
    ['A of spades', 'A of clubs', 'A of hearts', 'A of diamonds'],
];


for (let i=0; i<cardSign-1; i+=1) {
    console.log(matrix[i].join(', '));
}

