import React from 'react';

import { GridSquareProps } from './interfaces';
import { Square } from './styles';


const GridSquare = (props: GridSquareProps) => {
  const [active, setActive] = React.useState(props.active || false);

  const handleToggle = () => {
    setActive(old => !old);
    console.log(props.index, active)
  }

  return (
    <Square
      active={active}
      width={props.width}
      height={props.height}
      gap={props.gap}
      onClick={handleToggle}
    />
  )
}

export default GridSquare;
