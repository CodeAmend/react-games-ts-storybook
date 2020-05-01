import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';


interface GridSquareProps {
  width: string;
  height: string;
  gap: string;
  active?: boolean;
}

const Square = styled.div.attrs((props: GridSquareProps) => ({
  style: {
    width: props.width,
    height: props.height,
    border: `${props.gap} solid black`,
    backgroundColor: props.active ? 'yellow' : '#444',
  }
}))<GridSquareProps>`
  cursor: pointer;
`;


const GridSquare = (props: GridSquareProps) => {
  const [active, setActive] = React.useState(props.active || false);

  const handleToggle = () => {
    setActive(old => !old);
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
