import React from 'react';
import { GridBoardProps, GridSquareProps } from './interfaces';

import { useGameBoard } from './GameBoardHooks';
import GridSquare from './GridSquare';
import { Board } from './styles';




const GridBoard = () => {
  const { cols, rows, boardWidth, boardHeight, gridItems } = useGameBoard();

  
  return (
    <Board
      width={boardWidth + 'px'}
      height={boardHeight + 'px'}
      cols={cols}
      rows={rows}
    >
      {gridItems.map((item: GridSquareProps, index: number) => (
        <GridSquare key={index} { ...item} />
      ))}
    </Board>
  ); 
}

export default GridBoard;

