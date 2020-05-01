import React from 'react';
// import { action } from '@storybook/addon-actions';

import GridSquare from '../LightsOut/GridSquare';

export default {
  title: 'Grid Squares',
  component: GridSquare,
};

export const GridItemActive = () => (
    <GridSquare
      width="50px"
      height="50px"
      gap="1px"
      active={true}
    />
);

export const GridItemNotActive = () => (
    <GridSquare
      width="50px"
      height="50px"
      gap="1px"
    />
);
