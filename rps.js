let hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

let players = [];

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startTournament');
    startButton.addEventListener('click', startTournament);
});

function startTournament() {
    const gameLog = document.getElementById('gameLog');
    gameLog.innerHTML = ''; // Clear the game log before starting a new tournament

    players = [
        { name: document.getElementById('player1Name').value || 'Player 1', hand: getHand },
        { name: document.getElementById('player2Name').value || 'Player 2', hand: getHand },
        { name: document.getElementById('player3Name').value || 'Player 3', hand: getHand },
        { name: document.getElementById('player4Name').value || 'Player 4', hand: getHand }
    ];
    playTournament(players[0], players[1], players[2], players[3], 3);
}

function playRound(player1, player2) {
    let hand1 = player1.hand();
    let hand2 = player2.hand();

    logGame(`${player1.name} chose ${hand1}`);
    logGame(`${player2.name} chose ${hand2}`);

    if (hand1 === hand2) {
        logGame("It's a tie!", 'tie');
        return null;
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'scissors' && hand2 === 'paper') ||
        (hand1 === 'paper' && hand2 === 'rock')
    ) {
        logGame(`${player1.name} wins this round!`, player1.name);
        return player1;
    } else {
        logGame(`${player2.name} wins this round!`, player2.name);
        return player2;
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

    if (wins[player1.name] > wins[player2.name]) {
        logGame(`${player1.name} wins the game!`, player1.name);
        return player1;
    } else {
        logGame(`${player2.name} wins the game!`, player2.name);
        return player2;
    }
}

function playTournament(player1, player2, player3, player4, playUntil) {
    let winner1 = playGame(player1, player2, playUntil);
    let winner2 = playGame(player3, player4, playUntil);
    let champion = playGame(winner1, winner2, playUntil);
    logGame(`${champion.name} is the world champion!`, champion.name);
}

function logGame(message, winner = '') {
    const gameLog = document.getElementById('gameLog');
    const logEntry = document.createElement('p');
    logEntry.textContent = message;
    logEntry.classList.add('round');
    if (winner) {
        logEntry.classList.add('winner');
    }
    gameLog.appendChild(logEntry);
}
