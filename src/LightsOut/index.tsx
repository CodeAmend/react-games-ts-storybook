import React from 'react';
import styled from 'styled-components';

import GameBoard from './GridBoard'
import { createNewBoard } from './util';
import config from '../gameConfig';


const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`;

const initialGridItems = createNewBoard();

const LightsOut = () => {
  const [gridItems, setGridItems] = React.useState(initialGridItems);

  return (
    <Wrapper>
      <GameBoard
        rows={config.rows}
        cols={config.cols}
        gridItems={gridItems}
      />
    </Wrapper>
  )
}

export default LightsOut;
