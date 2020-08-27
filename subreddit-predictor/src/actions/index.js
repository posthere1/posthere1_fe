import { axiosWithAuth } from "../utils/axiosWthAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const FETCH_SUB = "FETCH_SUB";
export const FETCH_SUB_FAIL = "FETCH_SUB_FAIL";
export const FETCH_SUB_SUCCESS = "FETCH_SUB_SUCCESS";

export const login = () => (dispatch) => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .get("/api/login")
    .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: LOGIN_FAILED, payload: err }));
};

export const fetchSubs = () => (dispatch) => {
  dispatch({ type: FETCH_SUB });
  axiosWithAuth()
    .get("/prediction")
    .then((res) => {
      dispatch({ type: FETCH_SUB_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_SUB_FAIL, payload: err });
    });
};
