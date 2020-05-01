import React from 'react';
import { shallow } from 'enzyme';

import GridBoard from './GridBoard';
import { GridSquareProps } from './interfaces';
import config from '../gameConfig';



const gridItems: GridSquareProps[] = [];

for (let i = 0; i < 9; i++) {
  gridItems.push({
    width: config.colSize + 'px',
    height: config.rowSize + 'px',
    gap: config.gap + 'px',
    active: false,
    handleEvent: e => console.log(e),
  });
}


describe('GridBoard 9 inactive setup 3x3', () => {
  test('has 3 cols', () => {
    const wrapper = shallow(
      <GridBoard
        rows={3}
        cols={3}
        gridItems={gridItems}
      />
    );
  });
});
