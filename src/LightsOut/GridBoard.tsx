import React from 'react';
import { GridBoardProps, GridSquareProps } from './interfaces';
import config, { getSingleBoardDimension } from '../gameConfig';

import GridSquare from './GridSquare';
import { Board } from './styles';




const GridBoard = (props: GridBoardProps) => {
  const { cols, rows } = props;
  const { colSize, rowSize, gap } = config;

  const boardWidth = getSingleBoardDimension(cols, colSize, gap);
  const boardHeight = getSingleBoardDimension(rows, rowSize, gap);
  
  return (
    <Board
      width={boardWidth + 'px'}
      height={boardHeight + 'px'}
      cols={cols}
      rows={rows}
    >
      {props.gridItems.map((item: GridSquareProps, index: number) => (
        <GridSquare key={index} { ...item} />
      ))}
    </Board>
  ); 
}

export default GridBoard;

