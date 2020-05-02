import React from 'react';
import styled from 'styled-components';

import { useGameBoard } from '../store/hooks';
import GameBoard from './GridBoard'


const Wrapper = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Counter = styled.aside`
  position: absolute;
  right: 0;
  top: 0;
`;


const LightsOut = () => {
  const {
    cols,
    rows,
    gridItems,
    boardWidth,
    boardHeight,
    toggleAjacentOfIndex,
    counter,
  } = useGameBoard();

  return (
    <Wrapper>
      <Counter>Count: {counter}</Counter>
      <GameBoard 
        cols={cols}
        rows={rows}
        width={boardWidth}
        height={boardHeight}
        gridItems={gridItems}
        handeEvent={toggleAjacentOfIndex}
      />
    </Wrapper>
  )
}

export default LightsOut;
