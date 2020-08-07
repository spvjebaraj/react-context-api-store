import React, { Component } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import MyApp from "./MyApp";

const browserHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <MyApp />
      </Router>
    );
  }
}

export default App;
