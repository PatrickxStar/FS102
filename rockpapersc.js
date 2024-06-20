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
let player3 = {
    name: 'Bob',
    hand: getHand
  }
  let player4 = {
    name: 'Alice',
    hand: getHand
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

function playGame(player1, player2, playUntil) {
    let wins = { [player1.name]: 0, [player2.name]: 0 };
  
    for (let i = 0; i < playUntil; i++) {
      let winner = playRound(player1, player2);
      if (winner) {
        wins[winner.name]++;
      }
    }
  
    return wins[player1.name] > wins[player2.name] ? player1 : player2; // If / else statement - if player one is true, player one name returns, otherwise name of player 2 returns. 
  }
  
  function playTournament(player1, player2, player3, player4, playUntil) {
    let winner1 = playGame(player1, player2, playUntil);
    let winner2 = playGame(player3, player4, playUntil);
    let champion = playGame(winner1, winner2, playUntil);
    console.log(`${champion.name} is the world champion!`);
  }
  
  playTournament(player1, player2, player3, player4, 3);
  