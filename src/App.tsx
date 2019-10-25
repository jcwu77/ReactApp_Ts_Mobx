import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { configure } from "mobx";
import { Provider } from "mobx-react/custom";

import stores from "./stores/index";
import Routes from "./view/Routes";

configure({
  enforceActions: true,
});

// window._____APP_STATE_____ = stores;

const App = () => {
  return (
    <Provider {...stores}>
      <Router>
        <Route path="/" component={Routes} />
      </Router>
    </Provider>
  );
};

export default App;
