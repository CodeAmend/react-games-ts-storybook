import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import AppRoutes from './Routes/AppRoutes';
import MenuLinks from './Routes/MenuLinks';
import GameProvider from './store/GameProvider';


ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <Router>
        <MenuLinks />
        <AppRoutes />
      </Router>
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
