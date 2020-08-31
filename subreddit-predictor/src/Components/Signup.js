import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import { signUp } from "../actions";

const Signup = (props) => {
  const [signUpState, setSignUpState] = useState({
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
      .min(4, "Username must have at least 4 characters")
      .required("Username is required"),
    /*email: yup
      .string()
      .email("An email is required")
      .required("Email is required"),*/
    password: yup
      .string()
      .min(8, "Password must have at least 8 characters")
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

  const inputChange = (e) => {
    e.persist();
    const newAcctData = {
      ...signUpState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setSignUpState(newAcctData);
  };

  useEffect(() => {
    formSchema.isValid(signUpState).then((isValid) => {
      setDisableButton(!isValid);
    });
  }, [signUpState]);

  return (
    <div>
      <h1>Sign Up Page</h1>
      <form>
        {/*<label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="text"
            value={signUpState.email}
            placeholder="Enter Email here"
            onChange={inputChange}
          />
  </label>*/}
        <label htmlFor="username">
          Username:
          <input
            id="username"
            name="username"
            type="text"
            value={signUpState.username}
            placeholder="Create your Username"
            onChange={inputChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="password"
            name="password"
            value={signUpState.password}
            placeholder="Create your password"
            onChange={inputChange}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            props.signUp(signUpState);
          }}
          disabled={disableButton}
          type="submit"
        >
          Create Account
        </button>
        {errors.username.length > 0 ? (
          <p className="validateInfo">{errors.username}</p>
        ) : null}
        {errors.password.length > 0 ? (
          <p className="validateInfo">{errors.email}</p>
        ) : null}
        {errors.username.length > 0 ? (
          <p className="validateInfo">{errors.password}</p>
        ) : null}
        {errors.password.length > 0 ? (
          <p className="validateInfo">{errors.terms}</p>
        ) : null}
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

export default connect(mapStateToProps, { signUp })(Signup);
