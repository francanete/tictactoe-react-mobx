import React from "react";
import { calculateWinner } from "../calculateWinner";
import { calculateWinner25 } from "../calculateWinner25";
import Confetti from "react-dom-confetti";

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

  const config = {
    angle: "166",
    spread: 360,
    startVelocity: 40,
    elementCount: "149",
    dragFriction: 0.12,
    duration: "6230",
    stagger: 3,
    width: "22px",
    height: "23px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="winnerWrapper">
        <h3>
          {winner && "Winner: " + winner}
          {store.board.length === 0
            ? ""
            : winner
            ? ""
            : "Next player :" + (store.xIsNext ? "X" : "O")}
        </h3>
        <Confetti active={winner} config={config} />
      </div>
      <h3>
        {!winner ? (store.board.length !== 0 ? renderMoves() : "") : ""}
        {store.board.length === 0 ? <SetBoard /> : ""}
        {winner ? <SetBoard /> : ""}
      </h3>

      <Board onClick={handleClick} />
    </>
  );
});

export default Game;
