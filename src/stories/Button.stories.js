import React from 'react';
import { action } from '@storybook/addon-actions';

import MenuButton, { ColorChoice } from '../MainMenu/MenuButton';


export default {
  title: 'Menu Screen Buttons',
  component: MenuButton,
};

export const MenuItem = () => (
  <MenuButton
    title="Click Sky Button"
  />
);
