import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";

const PublicRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/sign-in" />
      <Route path="/" component={SignIn} exact />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  );
};

export default PublicRoutes;
