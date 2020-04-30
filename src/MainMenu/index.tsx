import React from 'react';

import { MainScreen, Header } from './styles';
import LightsOut from '../LightsOut';


function App() {
  return (
    <MainScreen>
      <Header>React Games</Header>
      <LightsOut />
    </MainScreen>
  );
}

export default App;
