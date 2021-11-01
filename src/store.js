import { makeAutoObservable } from "mobx";

class Store {
  boardSize = "";
  board = Array(0).fill("");
  xIsNext = true;

  constructor() {
    makeAutoObservable(this);
  }

  setBoard(board) {
    this.board = board;
  }

  setTurn(xIsNext) {
    this.xIsNext = xIsNext;
  }
}

export default new Store();
