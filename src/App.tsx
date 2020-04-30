import React from 'react';
import styled from 'styled-components';

import GameBoard from './components/GameBoard';

const View = styled.main``;
const Header = styled.h1``;

function App() {
  return (
    <View>
      <Header>Lights Out</Header>
      <GameBoard />
    </View>
  );
}

export default App;
