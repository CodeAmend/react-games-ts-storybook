import React from 'react';

import { MainScreen, Header, Menu } from './styles';
import MenuItem from './MenuButton';


const MenuLinks = () => {
  return (
    <MainScreen>
      <Header>React Games</Header>
      <Menu>
        <MenuItem to="/lights-out">Lights Out</MenuItem>
        <MenuItem to="/snake">Snake</MenuItem>
        <MenuItem to="/random-walker">Random Walker</MenuItem>
      </Menu>
    </MainScreen>

  );
}

export default MenuLinks;

