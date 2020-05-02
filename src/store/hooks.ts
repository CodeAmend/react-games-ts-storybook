import React from 'react';
import { GameBoardContext } from './GameProvider';


const getSingleBoardDimension =
  (sections: number, sectionSize: number, gap: number): number => {
    return sections * (sectionSize + gap);
  }

export const useGameBoard = () => {
  const {
    gridItems,
    cols, rows, colSize, rowSize, gap,
  } = React.useContext(GameBoardContext);

  const getBoardWidth = () => getSingleBoardDimension(cols, colSize, gap) + 'px';
  const getBoardHeight = () => getSingleBoardDimension(rows, rowSize, gap) + 'px';

  return {
    boardWidth: getBoardWidth(),
    boardHeight: getBoardHeight(),
    cols,
    rows,
    gridItems,
  }
}
