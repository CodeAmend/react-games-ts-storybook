import React from 'react';

import { MainScreen, Header, Menu } from './styles';
import MenuItem from '../MainMenu/MenuButton';


function App() {
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

export default App;
