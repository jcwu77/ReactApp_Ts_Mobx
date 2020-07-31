import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
const Demo = lazy(() => import("./Demo"));

const Routes = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route path="/demo" component={Demo} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
