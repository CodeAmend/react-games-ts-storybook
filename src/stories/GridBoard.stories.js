import React from 'react';

import GridBoard from '../LightsOut/GridBoard'

export default {
  title: 'Grid Board and Squares',
  component: GridBoard,
};

const gridItems = [];
for (let i = 0; i < 9; i++) {
  gridItems.push({
    width: '50px',
    height: '50px',
    gap: '1px',
    active: false,
    handleEvent: e => console.log(e),
  });
}

const gap = 1;
const colWidth = 50;
const cols = 3;
const width = cols * colWidth + cols * gap - 1;
const height = cols * colWidth + cols * gap - 1;

export const GridBoard3x3 = () => (
  <GridBoard
    rows={3}
    cols={3}
    width={3 * (50 + 3 * 1 - 1)}
    height={3 * (50 + 3 * 1 - 1)}
    gridItems={gridItems}
  />
)
