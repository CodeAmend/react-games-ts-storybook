import React from 'react';
import { createNewBoard } from './util';
import { GridSquareProps } from '../LightsOut/interfaces';
import config from './config';


// TODO: this needs to be setState type. What is that?
interface GameBoardContextType {
  gridItems: GridSquareProps[];
  gap: number;
  rowSize: number;
  colSize: number;
  cols: number;
  rows: number;

  setGridItems: any;
  setGap: any;
  setRowSize: any;
  setColSize: any;
  setCols: any;
  setRows: any;
}

// TODO: is there another way to do this without the null logic? Its silly.
export const GameBoardContext = React.createContext<GameBoardContextType>({
  // TODO: ALL this is here because typescript will not let me make null or {} initial value
  gridItems: [],
  setGridItems: () => {},
  setGap: () => {},
  setCols: () => {},
  setRows: () => {},
  setColSize: () => {},
  setRowSize: () => {},
  rowSize: 0,
  colSize: 0,
  cols: 0,
  rows: 0,
  gap: 0,
});


const initialGridItems = createNewBoard();

const GameBoardProvider: React.FC = ({ children }) => {
  const [gridItems, setGridItems] = React.useState(initialGridItems);
  const [gap, setGap] = React.useState(config.gap);
  const [colSize, setColSize] = React.useState(config.colSize);
  const [rowSize, setRowSize] = React.useState(config.rowSize);
  const [rows, setRows] = React.useState(config.rows);
  const [cols, setCols] = React.useState(config.cols);

  const initialValue = {
    gridItems, setGridItems,
    gap, setGap,
    rowSize, setRowSize,
    colSize, setColSize,
    cols, setCols,
    rows, setRows,
  }

  return (
    <GameBoardContext.Provider value={initialValue as GameBoardContextType }>
      {children}
    </GameBoardContext.Provider>
  );
}

export default GameBoardProvider;

