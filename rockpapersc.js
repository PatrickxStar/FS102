let hands = ['rock', 'paper','scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) %3];
}

let player1 = {
    name: 'Patrick',
    hand:  getHand
}
let player2 = {
    name: 'Jane',
    hand:  getHand
}

function playRound() {

let hand1 = player1.hand();
let hand2 = player2.hand();

console.log(`${player1.name} chose ${hand1}`);
console.log(`${player2.name} chose ${hand2}`);

if ((hand1 === hand2)) {
    console.log("It's a tie!");
    return null;
} else if (
    (hand1 === 'rock' && hand2 === 'scissors') ||
    (hand1 === 'scissors' && hand2 === 'paper') ||
    (hand1 === 'paper' && hand2 === 'rock')
) {
    console.log(`${player1.name} wins!`);
} else {
    console.log(`${player2.name} wins!`);
}
}
playRound();
