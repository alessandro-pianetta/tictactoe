import { BoardState } from "./types.board";

export const initialState: BoardState = {
  moveCount: 0,
  markedSquares: [], // [[4, "X"], [3, "O"]]
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

export const winPatterns: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [3, 4, 6],
];
