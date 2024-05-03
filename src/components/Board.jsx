import { useState } from "react";
import Square from "./Square";
import Scoreboard from "./Scoreboard";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [movesCount, setMovesCount] = useState(0);
  const [xNext, setXNext] = useState(true);

  const handleClick = (i) => {
    if (checkWinner(squares) || squares[i]) {
      return;
    }
    const netSquares = [...squares];
    xNext ? (netSquares[i] = "X") : (netSquares[i] = "O");
    setSquares(netSquares);
    setXNext(!xNext);
    setMovesCount((prevMovesCount) => prevMovesCount + 1);
  };

  let statusGame;

  const winner = checkWinner(squares);

  console.log("winner :" + winner);
  console.log("count :" + movesCount);

  if (movesCount === 9 && winner === null) {
    statusGame = "DRAW";
  } else {
    statusGame = winner
      ? `WINNER: ${winner}`
      : `It's ${xNext ? "X" : "O"}’s turn`;
  }

  return (
    <>
      <div className="tris-square">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <div className="tris-scoreboard">
        <Scoreboard message={statusGame} />
      </div>
    </>
  );
};

const checkWinner = (squares) => {
  //winning lines matrix
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
      return squares[a];
    }
  }
  return null;
};

export default Board;
