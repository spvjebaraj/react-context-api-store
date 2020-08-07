import React from "react";
import "./App.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

import { useSession } from "./hooks";

import PrivateRoutes from "./navigation/privateRoutes";
import PublicRoutes from "./navigation/publicRoutes";

const browserHistory = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  center: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
}));

function MyApp() {
  const classes = useStyles();
  const { isLoading, isLoggedIn } = useSession();

  if (isLoading) {
    return (
      <div className={classes.center}>
        <CircularProgress color="primary" />
      </div>
    );
  }

  return (
    <div className="App">
      <Router history={browserHistory}>
        {isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}
      </Router>
    </div>
  );
}

export default MyApp;
