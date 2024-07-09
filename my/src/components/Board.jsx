import React from 'react';
import Square from './Square';
import calculateWinner from './calculateWinner';

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares, getLocation(i));
  }

  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winningSquares = winnerInfo ? winnerInfo.line : [];

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (squares.every(Boolean)) {
    status = "It's a draw!";
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const renderSquare = (i) => (
    <Square value={squares[i]} onSquareClick={() => handleClick(i)} highlight={winningSquares.includes(i)} />
  );

  const boardRows = [];
  for (let row = 0; row < 3; row++) {
    const squares = [];
    for (let col = 0; col < 3; col++) {
      squares.push(renderSquare(row * 3 + col));
    }
    boardRows.push(
      <div key={row} className="board-row">
        {squares}
      </div>
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      {boardRows}
    </>
  );
}

function getLocation(i) {
  const col = i % 3 + 1;
  const row = Math.floor(i / 3) + 1;
  return `${col}, ${row}`;
}

export default Board;
