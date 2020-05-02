import React from 'react';
import { shallow } from 'enzyme';

import GridBoard from './GridBoard';
import { GridSquareProps } from './interfaces';
import config from '../store/config';



const gridItems: GridSquareProps[] = [];

for (let i = 0; i < 9; i++) {
  gridItems.push({
    index: i,
    width: config.colSize + 'px',
    height: config.rowSize + 'px',
    gap: config.gap + 'px',
    active: false,
  });
}


describe('GridBoard 9 inactive setup 3x3', () => {
  test('has 3 cols', () => {
    const wrapper = shallow(
      <GridBoard
        rows={3}
        cols={3}
        width="500px"
        height="500px"
        gridItems={gridItems}
      />
    );
  });
});
