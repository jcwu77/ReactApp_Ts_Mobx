import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "@/components/Loading";
import CommonStore from "@/stores/CommonStore";
const Demo = lazy(() => import("./Demo"));

const Routes = () => {
  const { isLoading } = CommonStore;
  return (
    <Suspense fallback={<div></div>}>
      {isLoading ? (
        <Loading />
      ) : (
        <Switch>
          <Route path="/demo" component={Demo} />
        </Switch>
      )}
    </Suspense>
  );
};

export default Routes;
