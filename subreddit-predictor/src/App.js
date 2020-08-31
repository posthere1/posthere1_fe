import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import Dashboard from "./Components/Dashboard";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import About from "./Components/About";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Nav />
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
