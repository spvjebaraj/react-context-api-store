import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../components/Home/Home";

const PrivateRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Home} exact />
    </Switch>
  );
};

export default PrivateRoutes;
