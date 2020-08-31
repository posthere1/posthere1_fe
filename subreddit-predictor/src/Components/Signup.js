import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import { signUp } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Container = styled.div`
  width: 40%;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 10% 0 0 30%;
`;

const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: red;
  text-align: center;
  margin-left: 27%;
`;

const Signup = (props) => {
  const [signUpState, setSignUpState] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const classes = useStyles();

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
        console.log(error);
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    console.log("changed", e.target.value);
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
    <Container>
      <h2>Sign Up</h2>
      <form className={classes.root}>
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
          <TextField
            id="username"
            variant="standard"
            name="username"
            type="text"
            value={signUpState.username}
            placeholder="Create your Username"
            onChange={inputChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <TextField
            id="password"
            variant="standard"
            type="password"
            name="password"
            value={signUpState.password}
            placeholder="Create your password"
            onChange={inputChange}
          />
        </label>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            props.signUp(signUpState);
          }}
          disabled={disableButton}
          type="submit"
        >
          Create Account
        </Button>
        {errors.username.length > 0 ? (
          <ErrorMessage>{errors.username}</ErrorMessage>
        ) : null}
        {errors.password.length > 0 ? (
          <ErrorMessage>{errors.email}</ErrorMessage>
        ) : null}
        {errors.username.length > 0 ? (
          <ErrorMessage>{errors.password}</ErrorMessage>
        ) : null}
        {errors.password.length > 0 ? (
          <ErrorMessage>{errors.terms}</ErrorMessage>
        ) : null}
      </form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { signUp })(Signup);
