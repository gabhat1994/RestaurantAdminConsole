import React from "react";
import LandingPage from "./Components/LandingPage";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" exact={true} component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
