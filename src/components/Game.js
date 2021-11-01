import React from "react";
import { calculateWinner } from "../calculateWinner";
import Board from "./Board";
import { observer } from "mobx-react";

import store from "../store";

const Game = observer(() => {
  const winner = calculateWinner(store.board);

  const handleClick = (i) => {
    if (winner || store.board[i]) return;
    store.board[i] = store.xIsNext ? "X" : "O";
    store.setBoard(store.board);
    store.setTurn(!store.xIsNext);
  };

  const renderMoves = () => {
    return (
      <button
        className="start"
        onClick={() => store.setBoard(Array(9).fill(null))}
      >
        {!winner ? "Start Game" : "Play Again"}
      </button>
    );
  };

  return (
    <>
      <h1>tillit - Tic Tac Toe</h1>
      <h3>
        {winner
          ? "Winner: " + winner
          : "Next player :" + (store.xIsNext ? "X" : "O")}
        <div>{renderMoves()}</div>
      </h3>
      {/* {!winner ? (
        <Board onClick={handleClick} />
      ) : (
        "There is a winner: " + winner
      )} */}
      <Board onClick={handleClick} />
    </>
  );
});

export default Game;
