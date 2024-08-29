import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index";
import RegisterPage from "views/examples/RegisterPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" component={Index} />
      <Route path="/register-page" component={RegisterPage} />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
