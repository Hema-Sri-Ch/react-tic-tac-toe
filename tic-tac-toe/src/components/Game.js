import React, { useEffect, useState } from 'react';
import Board from './Board';
import '../styles/Game.css';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setWinner(CalculateWinner(squares));
  }, [squares]);

  const handleClick = (index) => {
    const newSquares = squares.slice();
    if(winner) return;
    if (newSquares[index]) return; // Ignore click if square is already filled
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  return (
    <div className='game-container'>
      <Board squares={squares} onClick={handleClick} />
      {winner ? <h2>Winner: {winner}</h2> : <h2>Next Player: {isXNext ? 'X' : 'O'}</h2>}
      <button onClick={() => {setSquares(Array(9).fill(null)); setIsXNext(true)}}>Restart</button>
    </div>
  );
}

function CalculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return the winner ('X' or 'O')
      }
    }
    return null; // No winner
  }
  
export default Game;