import React from "react";

import { axiosWithAuth } from "../utils/axiosWthAuth";
import { Redirect } from "react-router-dom";

// ACTION NAMES
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const SIGNUP_START = "LOGIN_START";
export const SIGNUP_SUCCESS = "LOGIN_SUCCESS";
export const SIGNUP_FAILED = "LOGIN_FAILED";

export const FETCH_SUB = "FETCH_SUB";
export const FETCH_SUB_FAIL = "FETCH_SUB_FAIL";
export const FETCH_SUB_SUCCESS = "FETCH_SUB_SUCCESS";

// LOGIN
export const login = (credentials) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("/api/login", credentials)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
    })
    .catch((err) => dispatch({ type: LOGIN_FAILED, payload: err }));
};

// SIGN UP
export const signUp = (userInfo) => (dispatch) => {
  dispatch({ type: SIGNUP_START });
  axiosWithAuth()
    .post("/api/signup", userInfo)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: SIGNUP_FAILED, payload: err }));
};

// FETCH SUBS
export const fetchSubs = () => (dispatch) => {
  dispatch({ type: FETCH_SUB });
  axiosWithAuth()
    .get("/prediction")
    .then((res) => {
      dispatch({ type: FETCH_SUB_SUCCESS, payload: res.data });
      return <Redirect to="/dashboard" />;
    })
    .catch((err) => {
      dispatch({ type: FETCH_SUB_FAIL, payload: err });
    });
};
