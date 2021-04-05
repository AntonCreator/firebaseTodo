import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import AlertState from "./context/alert/alertState";
import FirebaseState from "./context/firebase/firebaseState";

const App = () => {
  return (
    
    <FirebaseState>
      <AlertState>
        <BrowserRouter >
          <div className="container pt-4">
            <Switch>
              <Route path = "/" component = {Home} exact />
              <Route path = "/about" component = {About} />
             </Switch> 
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  
  );
}

export default App;
