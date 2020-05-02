import React from 'react';
// import { action } from '@storybook/addon-actions';

import GridBoard from '../LightsOut/GridBoard'
import config from '../store/config';

export default {
  title: 'Grid Board and Squares',
  component: GridBoard,
};

const gridItems = [];
for (let i = 0; i < 9; i++) {
  gridItems.push({
    width: config.colSize + 'px',
    height: config.rowSize + 'px',
    gap: config.gap + 'px',
    active: false,
    handleEvent: e => console.log(e),
  });
}

export const GridBoard3x3 = () => (
  <GridBoard
    rows={3}
    cols={3}
    gridItems={gridItems}
  />
)
