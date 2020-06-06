import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SingUp from './pages/SingUp/index'
import ListProducts from './pages/ListProducts/index'
import Profile from './pages/Profile/index'


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/signup" component={SingUp} />
      <Route exact path="/list-products" component={ListProducts} />
      <Route exact path="/profile" component={Profile} />

      <Route path="*" component={() => <h1>Sorry, page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;