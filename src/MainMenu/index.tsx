import React from 'react';

import { MainScreen, Header, Menu } from './styles';
import MenuItem from '../MainMenu/MenuButton';


function App() {
  return (
    <MainScreen>
      <Header>React Games</Header>
      <Menu>
        <MenuItem title="Lights Out" />
        <MenuItem title="Snake" />
        <MenuItem title="Random Walker" />
      </Menu>
    </MainScreen>
  );
}

export default App;
