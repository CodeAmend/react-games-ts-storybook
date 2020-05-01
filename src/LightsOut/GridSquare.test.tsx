import React from 'react';
import { shallow } from 'enzyme';

import GridSquare from './GridSquare';


test('GridSquare default is not active', () => {
  const wrapper = shallow(
    <GridSquare
      width="50px"
      height="50px"
      gap="1px"
    />
  );

  expect(wrapper.prop('active')).toBe(false)
});

test('GridSquare toggles active on click', () => {
  const wrapper = shallow(
    <GridSquare
      width="50px"
      height="50px"
      gap="1px"
    />
  );

  expect(wrapper.prop('active')).toBe(false)
  wrapper.simulate('click')
  expect(wrapper.prop('active')).toBe(true)
  wrapper.simulate('click')
  expect(wrapper.prop('active')).toBe(false)
});

// TODO: should I test css as well?
