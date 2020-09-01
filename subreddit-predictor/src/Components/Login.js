import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import { login, fetchPrev } from "../actions/";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
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

const Info = styled.h2`
  color: #0079d3;
  font-weight: bold;
`;

const Login = (props) => {
  const classes = useStyles();

  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const { history } = useHistory();

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
    <Container>
      <Info>Sign In </Info>
      <form className={classes.root}>
        <label htmlFor="username">
          Username:
          <TextField
            id="username"
            variant="standard"
            type="text"
            name="username"
            value={loginState.username}
            placeholder="Create your Username"
            onChange={loginInfo}
          />
        </label>
        <label htmlFor="password">
          Password:
          <TextField
            id="password"
            variant="standard"
            type="password"
            name="password"
            value={loginState.password}
            placeholder="Create your password"
            onChange={loginInfo}
          />
        </label>
        <Button
          variant="contained"
          color="primary"
          disabled={disableButton}
          onClick={async (e) => {
            e.preventDefault();
            await props.login(loginState);
            props.fetchPrev(props.userId);
            props.history.push("/dashboard");
          }}
          type="submit"
        >
          Sign In
        </Button>
        {errors.username.length > 0 ? (
          <ErrorMessage>{errors.username}</ErrorMessage>
        ) : null}
        {errors.password.length > 0 ? (
          <ErrorMessage>{errors.password}</ErrorMessage>
        ) : null}
        {props.error && <ErrorMessage>There was an error.</ErrorMessage>}
      </form>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    userId: state.userId,
  };
};

export default connect(mapStateToProps, { login, fetchPrev })(Login);
