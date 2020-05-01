import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import GridSquare from '../LightsOut/GridSquare';


export default {
  title: 'Board Grid Item',
  component: GridSquare,
};

const Wrapper = styled.div`
  position: relative;
`;

export const GridItemActive = () => (
  <Wrapper>
    <GridSquare
      width="50px"
      height="50px"
      gap="1px"
      active={true}
    />
  </Wrapper>
);

export const GridItemNotActive = () => (
  <Wrapper>
    <GridSquare
      width="50px"
      height="50px"
      gap="1px"
    />
  </Wrapper>
);
