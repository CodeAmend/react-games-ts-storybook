import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import AppRouter from './AppRouter';
import GameBoardProvider from './LightsOut/GameBoardProvider';


ReactDOM.render(
  <React.StrictMode>
    <GameBoardProvider>
      <AppRouter />
    </GameBoardProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
