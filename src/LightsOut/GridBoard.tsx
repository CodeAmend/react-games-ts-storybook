import React from 'react';
import { GridSquareProps, GridBoardProps } from './interfaces';

import GridSquare from './GridSquare';
import { Board } from './styles';




const GridBoard = (props: GridBoardProps) => {
  return (
    <Board
      width={props.width + 'px'}
      height={props.height + 'px'}
      cols={props.cols}
      rows={props.rows}
    >
      {props.gridItems.map((item: GridSquareProps, index: number) => (
        <GridSquare key={index} { ...item} />
      ))}
    </Board>
  ); 
}

export default GridBoard;

