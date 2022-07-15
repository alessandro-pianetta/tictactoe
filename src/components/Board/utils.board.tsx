import { winPatterns } from "./consts.board";
import {
  BoardAction,
  BoardState,
  GameMove,
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

// TODO Can the user's actions be memofied?
export function checkGameStatus(status: GameStatus) {
  let userHasWon: boolean = false;
  const [lastMove, currentPlayer]: GameMove = status[status.length - 1];
  const filteredMovesByCurrentPlayer: number[] = status
    .filter((move) => move[1] === currentPlayer)
    .map((move) => move[0])
    .sort();
  const filteredWinPatterns: number[][] = winPatterns
    .filter((pattern) => pattern.includes(lastMove))
    .sort();

  /* 
    For each pattern, check if each number appears in the moves made
    by current player. If all numbers are included, the user wins.
  */
  for (const pattern of filteredWinPatterns) {
    const isMatch: boolean = pattern.every((x) =>
      filteredMovesByCurrentPlayer.includes(x)
    );
    if (isMatch) {
      userHasWon = true;
    }
  }

  return userHasWon;
}
