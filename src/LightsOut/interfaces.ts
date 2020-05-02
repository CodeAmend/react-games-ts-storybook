export interface GridSquareProps {
  index: number;
  width: string;
  height: string;
  gap: string;
  active?: boolean;
  handeEvent?: (index: number, e: Event) => void; 
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
  width: string;
  height: string;
  handeEvent?: (index: number, e: Event) => void; 
}

