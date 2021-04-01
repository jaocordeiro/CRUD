import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/adduser" component={AddUser} />
        <Route path="/edituser/:id" component={EditUser} />
        <Route component={() => <div>Page not found 404!</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
