import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { GlobalProvider } from "./components/context/GlobalState";

export const Routes = () => {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/adduser" component={AddUser} />
          <Route path="/edituser/:id" component={EditUser} />
          <Route component={() => <div>Page not found 404!</div>} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default Routes;
