import React from "react";
import { Switch, Route } from "react-router-dom";
import Demo from "./Demo";

const Routes = () => {
  return (
    <Switch>
      <Route path="/demo" component={Demo} />
    </Switch>
  );
};

export default Routes;
