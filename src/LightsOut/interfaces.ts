export interface GridSquareProps {
  index: number;
  width: string;
  height: string;
  gap: string;
  active?: boolean;
}

export type GridBoardOptionProps = {
  width: string;
  height: string;
  rows: number;
  cols: number;
}

export type GridBoardProps = {
  gridItems: GridSquareProps[];
  rows: number;
  cols: number;
}

