export interface SquareData {
  id: number;
  player: string;
  style: string;
}

export interface BoardState {
  squareData: SquareData[];
}

export interface BoardAction {
  type: string;
  payload: SquareData;
}
