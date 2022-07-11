import React from "react";
import "./styles.square.css";

interface SquareProps {
  cssClass: string;
}

function Square({ cssClass }: SquareProps) {
  return <div className={`square ${cssClass}`}></div>;
}

export default Square;
