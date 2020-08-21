import React from "react";

const Signup = () => {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <form>
        <label htmlFor="username">
          Username:
          <input id="username" type="text" placeholder="Create your Username" />
        </label>
        <label htmlFor="email">
          Email:
          <input id="email" type="text" placeholder="Enter Email here" />
        </label>

        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Create your password"
          />
        </label>
        <label htmlFor="terms">
          Terms And Conditions
          <input id="terms" type="checkbox" />
        </label>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
