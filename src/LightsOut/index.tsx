import React from 'react';
import styled from 'styled-components';

import GameBoard from './GridBoard'


const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`;


const LightsOut = () => {

  return (
    <Wrapper>
      <GameBoard />
    </Wrapper>
  )
}

export default LightsOut;
