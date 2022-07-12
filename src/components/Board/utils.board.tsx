import { winPatterns } from "./consts.board";
import {
  BoardAction,
  BoardState,
  GameStatus,
  Player,
  SquareData,
} from "./types.board";

export function changeCurrentPlayer(curr: Player): Player {
  return curr === "X" ? "O" : "X";
}

export function reducer(
  { markedSquares, moveCount, squareData }: BoardState,
  { type, payload: { id, player } }: BoardAction
): BoardState {
  switch (type) {
    case "move":
      const newMoveCount = (moveCount += 1);
      const newSquareData: SquareData[] = [...squareData];
      const newMarkedSquares = [...markedSquares];
      newSquareData[id].player = player;
      newMarkedSquares.push([id, player]);
      return {
        markedSquares: newMarkedSquares,
        moveCount: newMoveCount,
        squareData: newSquareData,
      };
    default:
      throw new Error();
  }
}

export function checkGameStatus(status: GameStatus) {
  console.log(status);
  // [
  //   [0, "X"],
  //   [1, "O"],
  //   [2, "X"],
  //   [4, "O"],
  //   [3, "X"],
  // ];

  // take lastItem
  // get status and filter out all non lastItem[1] values
  // get winPatterns and filter out all non lastItem[0] values
  // iterate through filteredPatterns and check if all values exist on filteredStatus
  // If one matches, that player wins
  // If not, nothing happens
  // If Moves > 9, stalemate message and reset game
}
