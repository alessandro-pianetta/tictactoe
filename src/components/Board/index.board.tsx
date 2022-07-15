import React, { ReactElement, useEffect, useReducer, useState } from "react";
import Square from "../Square/index.square";
import { initialState } from "./consts.board";
import "./styles.board.css";
import { Player, SquareData } from "./types.board";
import { changeCurrentPlayer, checkGameStatus, reducer } from "./utils.board";

function Board(): ReactElement {
  const [{ squareData, markedSquares, moveCount }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [currentPlayer, setCurrentPlayer] = useState("X");

  useEffect(() => {
    if (moveCount > 4) {
      const userHasWon: boolean = checkGameStatus(markedSquares);
      if (userHasWon) {
        alert("Congrats!");
      }
    }
  }, [markedSquares, moveCount]);

  function handleClick(square: SquareData): void {
    if (!square.player) {
      const payload: SquareData = {
        ...square,
        player: currentPlayer as Player,
      };
      dispatch({
        type: "move",
        payload,
      });
      setCurrentPlayer(changeCurrentPlayer(currentPlayer as Player));
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
