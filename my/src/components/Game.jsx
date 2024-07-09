import React, { useState } from 'react';
import Board from './Board';
import calculateWinner from './calculateWinner';

function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), location: null }]);
  const [currentMove, setCurrentMove] = useState(0);
  const [ascending, setAscending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  function handlePlay(nextSquares, location) {
    const nextHistory = [...history.slice(0, currentMove + 1), { squares: nextSquares, location }];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function toggleSort() {
    setAscending(!ascending);
  }

  function resetGame() {
    setHistory([{ squares: Array(9).fill(null), location: null }]);
    setCurrentMove(0);
    setAscending(true);
  }

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move} (${step.location})` : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)} style={{ fontWeight: move === currentMove ? 'bold' : 'normal' }}>
          {desc}
        </button>
      </li>
    );
  });

  if (!ascending) {
    moves.reverse();
  }

  const winnerInfo = calculateWinner(currentSquares);
  const winner = winnerInfo ? winnerInfo.winner : null;

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        {(winner || currentSquares.every(Boolean)) && (
          <button className="reset-button" onClick={resetGame}>
            Play Again
          </button>
        )}
      </div>
      <div className="game-info">
        <button onClick={toggleSort}>
          {ascending ? 'Sort Descending' : 'Sort Ascending'}
        </button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
