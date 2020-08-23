import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="NavLinks">
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login"> Login </Link>
    </div>
  );
};

export default Nav;
