import { axiosWithAuth } from "../utils/axiosWthAuth";

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

export const LOGOUT = "LOGOUT";

// SIGN UP
export const signUp = (userInfo) => (dispatch) => {
  dispatch({ type: SIGNUP_START });
  axiosWithAuth()
    .post("https://redditposthere.herokuapp.com/api/auth/register", userInfo)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
    })
    .catch((err) => dispatch({ type: SIGNUP_FAILED, payload: err }));
};

// LOGIN
export const login = (credentials) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("https://redditposthere.herokuapp.com/api/auth/login", credentials)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILED, payload: err });
      console.log(err);
    });
};

// LOGOUT
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem("token");
};

// FETCH SUBS
export const fetchSubs = (id) => (dispatch) => {
  dispatch({ type: FETCH_SUB });
  axiosWithAuth()
    .post(`https://redditposthere.herokuapp.com/api/posts/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_SUB_SUCCESS, payload: res.data });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: FETCH_SUB_FAIL, payload: err });
      console.log(err);
    });
};
