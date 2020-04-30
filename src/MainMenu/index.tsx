import React from 'react';

import { MainScreen, Header } from './styles';


function App() {
  return (
    <MainScreen>
      <Header>React Games</Header>
      <ul>
        <li>Lights Out</li>
        <li>Snake</li>
        <li>Game Of Life</li>
      </ul>
    </MainScreen>
  );
}

export default App;
