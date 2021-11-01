import React from "react";
import { observer } from "mobx-react";

import store from "../store";

const SetBoard = observer(() => {
  return (
    <div className="boardChoice">
      <h2>Choose your board</h2>
      <button
        className="start"
        onClick={() => store.setBoard(Array(9).fill(null))}
      >
        9 squares
      </button>
      <button
        className="start"
        onClick={() => store.setBoard(Array(25).fill(null))}
      >
        25 squares
      </button>
    </div>
  );
});

export default SetBoard;
