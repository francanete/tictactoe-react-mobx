import React, { useState } from "react";
import { calculateWinner } from "../calculateWinner";
import Board from "./Board";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => {
    return (
      <button className="start" onClick={() => setBoard(Array(9).fill(null))}>
        {!winner ? "Start Game" : "Play Again"}
      </button>
    );
  };

  return (
    <>
      <h1>tillit - Tic Tac Toe</h1>
      <h3>
        {winner ? "Winner: " + winner : "Next player :" + (xIsNext ? "X" : "O")}
        <div>{renderMoves()}</div>
      </h3>
      <Board squares={board} onClick={handleClick} />
    </>
  );
}
