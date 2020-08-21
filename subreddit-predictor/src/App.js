import React from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>SubReddit Predictor</h1>
      <h3>We'll Tell You Where Your Post belongs</h3>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
