import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import { login } from "../actions/";

const Login = (props) => {
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [disableButton, setDisableButton] = useState(true);

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .min(4, "Must enter proper username")
      .required("Username is required"),
    password: yup
      .string()
      .min(8, "Proper password is required")
      .required("Password is required"),
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((error) => {
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0],
        });
      });
  };

  const loginInfo = (e) => {
    e.persist();
    const loginData = {
      ...loginState,
      [e.target.name]: e.target.value,
    };
    validateChange(e);
    setLoginState(loginData);
  };

  useEffect(() => {
    formSchema.isValid(loginState).then((isValid) => {
      setDisableButton(!isValid);
    });
  }, [loginState]);

  return (
    <div>
      <h1>Log In Page</h1>
      <form>
        <label htmlFor="username">
          Username:
          <input
            id="username"
            type="text"
            name="username"
            value={loginState.username}
            placeholder="Enter your Username"
            onChange={loginInfo}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="password"
            name="password"
            value={loginState.password}
            placeholder="Enter your password"
            onChange={loginInfo}
          />
        </label>
        <button
          disabled={disableButton}
          onClick={(e) => {
            e.preventDefault();
            props.login(loginState);
          }}
          type="submit"
        >
          Sign In
        </button>
        {errors.username.length > 0 ? (
          <p className="validateInfo">{errors.username}</p>
        ) : null}
        {errors.password.length > 0 ? (
          <p className="validateInfo">{errors.password}</p>
        ) : null}
        {props.error && <p>There was an error.</p>}
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { login })(Login);
