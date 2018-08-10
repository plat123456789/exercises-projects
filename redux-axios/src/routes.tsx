import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Artist from "./components/artist";
import Home from "./components/home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/artist/:id" exact={true} component={Artist} />
    </Switch>
  );
};

export default Routes;
