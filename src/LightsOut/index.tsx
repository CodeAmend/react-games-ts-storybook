import React from 'react';
import styled from 'styled-components';

import { useGameBoard } from '../store/hooks';
import GameBoard from './GridBoard'


const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`;


const LightsOut = () => {
  const {
    cols,
    rows,
    gridItems,
    boardWidth,
    boardHeight,
    toggleAjacentOfIndex,
  } = useGameBoard();

  return (
    <Wrapper>
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
