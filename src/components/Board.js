import React from "react";
import Square from "./Square";
import { observer } from "mobx-react";

import store from "../store";

let classBoard = "";

const Board = observer(({ squares, onClick }) => {
  if (store.board.length === 9) {
    classBoard = "board";
  } else if (store.board.length === 25) {
    classBoard = "board25";
  }
  return (
    <div className={classBoard}>
      {store.board.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
});

export default Board;
