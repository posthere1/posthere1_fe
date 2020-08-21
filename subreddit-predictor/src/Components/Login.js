import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Log In Page</h1>
      <form>
        <label htmlFor="username">
          Username:
          <input id="username" type="text" placeholder="Enter your Username" />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button>Sign In</button>
        </label>
      </form>
    </div>
  );
};

export default Login;
