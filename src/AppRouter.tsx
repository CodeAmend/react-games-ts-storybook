import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainMenu from './MainMenu';
import LightsOut from './LightsOut';


const AppRouter = () => {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/lights-out">
          <LightsOut />
        </Route>
        <Route path="/snake">
          <div>Snake Game</div>
        </Route>
        <Route path="/random-walker">
          <div>Random Walker</div>
        </Route>
        <Route path="/">
          <div>Random Walker</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
