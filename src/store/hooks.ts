import React from 'react';
import { GameBoardContext } from './GameProvider';
import { GridSquareProps } from '../LightsOut/interfaces';


const getSingleBoardDimension =
  (sections: number, sectionSize: number, gap: number): number => {
    return sections * (sectionSize + gap);
  }

export const useGameBoard = () => {
  const {
    gap,
    cols,
    rows,
    colSize,
    rowSize,
    gridItems,
    setGridItems,
  } = React.useContext(GameBoardContext);


  const getBoardWidth = () => getSingleBoardDimension(cols, colSize, gap) + 'px';
  const getBoardHeight = () => getSingleBoardDimension(rows, rowSize, gap) + 'px';

  const toggleAjacentOfIndex = (index: number) => {
    type DirType = number | null;
    const { length } = gridItems;

    // Add 1 to index, modulo for 1 or cols to find edges
    const left: DirType = (index + 1) % cols !== 1 ? index - 1 : null;
    const right: DirType = (index + 1) % cols !== 0 ? index + 1 : null;

    const up = index - rows >= 0 ? index - rows : null;
    const down = index + rows <= (length - 1) ? index + rows : null;

    const filteredGridItems = gridItems.filter((item, num) => {
      if (num === left || num === right || num === up || num === down || num === index) {
        item.active = !item.active;
      }
      return item;
    });

    console.log(index, filteredGridItems)

    setGridItems(filteredGridItems);
  }

  return {
    boardWidth: getBoardWidth(),
    boardHeight: getBoardHeight(),
    cols,
    rows,
    gridItems,
    toggleAjacentOfIndex,
  }
}
