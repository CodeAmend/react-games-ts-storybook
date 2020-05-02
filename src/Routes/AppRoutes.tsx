import React from 'react';
import { Switch, Route } from "react-router-dom";

import LightsOut from '../LightsOut';


const AppRoutes = () => {
  return (
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
  );
}

export default AppRoutes;
