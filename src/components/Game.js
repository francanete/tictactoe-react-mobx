import React from "react";
import { calculateWinner } from "../calculateWinner";
import { calculateWinner25 } from "../calculateWinner25";

import Board from "./Board";
import { observer } from "mobx-react";

import store from "../store";
import SetBoard from "./SetBoard";

const Game = observer(() => {
  let winner = "";

  if (store.board.length === 9) {
    winner = calculateWinner(store.board);
  } else if (store.board.length === 25) {
    winner = calculateWinner25(store.board);
  }

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
        onClick={() => store.setBoard(Array(0).fill(null))}
      >
        Reset Game
      </button>
    );
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h3>
        {store.board.length === 0
          ? ""
          : winner
          ? "Winner: " + winner
          : "Next player :" + (store.xIsNext ? "X" : "O")}
        {!winner ? (store.board.length !== 0 ? renderMoves() : "") : ""}
        {store.board.length === 0 ? <SetBoard /> : ""}
        {winner ? <SetBoard /> : ""}
      </h3>

      <Board onClick={handleClick} />
    </>
  );
});

export default Game;
