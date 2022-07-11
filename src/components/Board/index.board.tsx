import React from "react";
import Square from "../Square/index.square";
import "./styles.board.css";

function Board() {
  return (
    <div className="board">
      <Square cssClass="col1 row1" />
      <Square cssClass="col2 row1" />
      <Square cssClass="col3 row1" />
      <Square cssClass="col1 row2" />
      <Square cssClass="col2 row2" />
      <Square cssClass="col3 row2" />
      <Square cssClass="col1 row3" />
      <Square cssClass="col2 row3" />
      <Square cssClass="col3 row3" />
    </div>
  );
}

export default Board;
