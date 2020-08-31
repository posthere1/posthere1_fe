import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/";
import logo from "../assets/logo.png";
import profileIcon from "../assets/profileicon.png";
import styled from "styled-components";

const LinkNav = styled.nav`
padding: 0 3% 0 3%;
  text-decoration: none;
  font-size: calc(0.6em + 0.6vw);
  color: black;
}`;

const Nav = (props) => {
  return (
    <header className="header">
      <LinkNav>
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
      </LinkNav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps, { logout })(Nav);
