import React, { ReactElement } from "react";
import "./styles.square.css";
import { SquareProps } from "./types.square";

function Square({
  cssClass,
  currentPlayer,
  onClick,
}: SquareProps): ReactElement {
  return (
    <div onMouseDown={onClick} className={`square ${cssClass}`}>
      <p>{currentPlayer}</p>
    </div>
  );
}

export default Square;
