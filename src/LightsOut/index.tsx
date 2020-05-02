import React from 'react';
import styled from 'styled-components';

import { useGameBoard } from '../store/hooks';
import GameBoard from './GridBoard'


const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`;


const LightsOut = () => {
  const { cols, rows, gridItems, boardWidth, boardHeight } = useGameBoard();

  return (
    <Wrapper>
    <GameBoard 
      cols={cols}
      rows={rows}
      width={boardWidth}
      height={boardHeight}
      gridItems={gridItems}
    />
    </Wrapper>
  )
}

export default LightsOut;
