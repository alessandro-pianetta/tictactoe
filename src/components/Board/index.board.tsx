import React, { ReactElement, useReducer, useState } from "react";
import Square from "../Square/index.square";
import "./styles.board.css";
import { BoardAction, BoardState, SquareData } from "./types.board";

function reducer(
  { squareData }: BoardState,
  { type, payload: { id, player } }: BoardAction
): BoardState {
  switch (type) {
    case "mark":
      const newData: SquareData[] = [...squareData];
      newData[id].player = player;
      return { squareData: newData };
    default:
      throw new Error();
  }
}

const initialState: BoardState = {
  squareData: [
    { id: 0, player: "", style: "col1 row1" },
    { id: 1, player: "", style: "col2 row1" },
    { id: 2, player: "", style: "col3 row1" },
    { id: 3, player: "", style: "col1 row2" },
    { id: 4, player: "", style: "col2 row2" },
    { id: 5, player: "", style: "col3 row2" },
    { id: 6, player: "", style: "col1 row3" },
    { id: 7, player: "", style: "col2 row3" },
    { id: 8, player: "", style: "col3 row3" },
  ],
};

function changeCurrentPlayer(curr: string): string {
  return curr === "X" ? "O" : "X";
}

function Board(): ReactElement {
  const [{ squareData }, dispatch] = useReducer(reducer, initialState);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleClick(square: SquareData): void {
    if (!square.player) {
      dispatch({
        type: "mark",
        payload: { ...square, player: currentPlayer },
      });
      setCurrentPlayer(changeCurrentPlayer(currentPlayer));
    }
  }

  return (
    <div className="board">
      {squareData.map((square: SquareData): ReactElement => {
        const { id, player, style } = square;
        return (
          <Square
            key={`square-${id}`}
            cssClass={style}
            currentPlayer={player}
            onClick={() => handleClick(square)}
          />
        );
      })}
    </div>
  );
}

export default Board;
