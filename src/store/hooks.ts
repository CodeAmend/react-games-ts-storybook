import React from 'react';
import { GameBoardContext } from './GameProvider';

export const useGameBoard = () => {
  const {
    gridItems,
    cols, rows, colSize, rowSize, gap,
  } = React.useContext(GameBoardContext);

  const getSingleBoardDimension =
    (sections: number, sectionSize: number, gap: number): number => {
      return sections * (sectionSize + gap);
    }

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
