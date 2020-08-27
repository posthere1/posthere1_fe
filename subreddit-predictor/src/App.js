import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import Dashboard from "./Components/Dashboard";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/home" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
