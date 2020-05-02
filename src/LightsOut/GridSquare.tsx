import React from 'react';

import { GridSquareProps } from './interfaces';
import { Square } from './styles';


const GridSquare = (props: GridSquareProps) => {
  const handleToggle = (event: Event) => {
    if (props.handeEvent) {
      props.handeEvent(props.index, event);
    }
  }

  return (
    <Square
      active={props.active || false}
      width={props.width}
      height={props.height}
      gap={props.gap}
      onClick={handleToggle}
    />
  )
}

export default GridSquare;
