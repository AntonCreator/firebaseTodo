import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Home from "./pages/home"
import About from "./pages/about"
import AlertState from "./context/alert/alertState"
const App = () => {
  return (
    <div className="container pt-4">
    <AlertState>
      <BrowserRouter >
        <Switch>
          <Route path = "/" component = {Home} exact />
          <Route path = "/about" component = {About} />
        </Switch> 
      </BrowserRouter>
    </AlertState>
    </div>
  );
}

export default App;
