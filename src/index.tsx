import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import AppRoutes from './Routes/AppRoutes';
import MenuLinks from './Routes/MenuLinks';
import GameBoardProvider from './LightsOut/GameBoardProvider';


ReactDOM.render(
  <React.StrictMode>
    <GameBoardProvider>
      <Router>
        <MenuLinks />
        <AppRoutes />
      </Router>
    </GameBoardProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
