import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/";
import logo from "../assets/logo.png";
import profileIcon from "../assets/profileicon.png";

const Nav = (props) => {
  return (
    <header className="header">
      <nav>
        <div className="post-here">
          <img src={logo} alt="Black Reddit logo" className="logo" />
          <p>Post Here</p>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          {props.loggedIn && <NavLink to="/dashboard">Dashboard</NavLink>}
          <NavLink to="/about">About</NavLink>
          <NavLink to="/signup" id="signup">
            Sign Up
          </NavLink>
          <NavLink to="/login">Login</NavLink>
          {props.loggedIn && (
            <NavLink
              to="/"
              onClick={() => {
                props.logout();
              }}
            >
              Logout
            </NavLink>
          )}
          <img src={profileIcon} alt="Profile icon" className="profile" />
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps, { logout })(Nav);
