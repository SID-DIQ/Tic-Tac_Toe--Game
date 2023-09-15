import React, { useState } from 'react';
import './App.css';
import Board from './Components/Board/Board';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';
function App() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [xIsPlaying, setXIsPlaying] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleBoxClick = (boxId) => {
    if (!gameOver && board[boxId] === '') {
      const updatedBoard = board.map((value, id) => (id === boxId ? (xIsPlaying ? 'X' : 'O') : value));
      setBoard(updatedBoard);
      setXIsPlaying(!xIsPlaying);
      const newWinner = checkWinner(updatedBoard);
      if (newWinner) {
        setWinner(newWinner);
        setGameOver(true);
        updateScore(newWinner);
      } else if (updatedBoard.every((box) => box !== '')) {
        // Check for a draw
        setGameOver(true);
        setWinner('Draw');
      }
    }
  };

  const updateScore = (winningPlayer) => {
    if (winningPlayer === 'X') {
      setXScore(xScore + 1);
    } else {
      setOScore(oScore + 1);
    }
  };

  const checkWinner = (updatedBoard) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (
        updatedBoard[x] &&
        updatedBoard[x] === updatedBoard[y] &&
        updatedBoard[y] === updatedBoard[z]
      ) {
        return updatedBoard[x];
      }
    }
    return null;
  };

  const reset = () => {
    setGameOver(false);
    setWinner(null);
    setBoard(Array(9).fill(''));
  };

  const restartGame = () => {
    setGameOver(false);
    setWinner(null);
    setBoard(Array(9).fill(''));
    setXScore(0);
    setOScore(0);
  };

  return (
    <div className="App">
      <ScoreBoard xScore={xScore} oScore={oScore} />
      {gameOver && winner && (
        <div className="winner-message">
          {winner === 'X' ? 'X is the winner' : winner === 'O' ? 'O is the winner' : 'Match is Drawn'}
        </div>
      )}
      <Board board={board} onClick={handleBoxClick} />
      <button className="button" onClick={reset}>
        Reset Turn
      </button>
      <button className="button" onClick={restartGame}>
        Restart Game
      </button>
      <footer>
        <p>&copy; 2023 BONE CHILLER.</p>
      </footer>
    </div>
  );
}
export default App;
