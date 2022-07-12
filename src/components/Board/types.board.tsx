export type Player = "X" | "O" | "";

export type GameStatus = (string | number)[][];
export interface SquareData {
  id: number;
  player: Player;
  style: string;
}
export interface BoardState {
  squareData: SquareData[];
  moveCount: number;
  markedSquares: GameStatus;
}

export interface BoardAction {
  type: string;
  payload: SquareData;
}
