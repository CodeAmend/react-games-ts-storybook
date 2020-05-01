import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { Square } from '../LightsOut/styles';


export default {
  title: 'Board Grid Item',
  component: Square,
};

const Wrapper = styled.div`
  position: relative;
`;

export const GridItemActive = () => (
  <Wrapper>
    <Square
      onClick={action('clicked')}
      xPos="0"
      yPos="0"
      nodeWidth="50"
      nodeHeight="50"
      gap="1"
      active={true}
    />
  </Wrapper>
);

export const GridItemNonActive = () => (
  <Wrapper>
    <Square
      onClick={action('clicked')}
      xPos="0"
      yPos="0"
      nodeWidth="50"
      nodeHeight="50"
      gap="1"
      active={false}
    />
  </Wrapper>
);
