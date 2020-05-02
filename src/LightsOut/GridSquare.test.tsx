import React from 'react';
import { shallow } from 'enzyme';

import GridSquare from './GridSquare';


test('GridSquare default is not active', () => {
  const wrapper = shallow(
    <GridSquare
      index={0}
      width="50px"
      height="50px"
      gap="1px"
    />
  );

  expect(wrapper.prop('active')).toBe(false)
});

test('GridSquare on click fires handleEvent with index', () => {
  let testIndex = null;

  const wrapper = shallow(
    <GridSquare
      index={0}
      width="50px"
      height="50px"
      gap="1px"
      handeEvent={index => testIndex = index}
    />
  );
  wrapper.simulate('click')

  expect(testIndex).toBe(0)
});
