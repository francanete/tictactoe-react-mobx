import React from "react";
import Square from "./Square";
import { observer } from "mobx-react";

import store from "../store";

console.log(store.board);

const Board = observer(({ squares, onClick }) => {
  return (
    <div className="board">
      {store.board.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
});

export default Board;
