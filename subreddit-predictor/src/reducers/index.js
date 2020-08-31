import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  FETCH_SUB_SUCCESS,
  LOGOUT,
  UPDATE_ID,
  SET_PREV_POST,
} from "../actions";

const initialState = {
  userId: 0,
  subPredictions: [],
  loggedIn: false,
  error: "",
  isFetching: false,
  prevPost: [],
};

export function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        isFetching: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case SIGNUP_START:
      return {
        ...state,
        isFetching: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        loggedIn: true,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case FETCH_SUB_SUCCESS:
      return {
        ...state,
        subPredictions: action.payload,
        isFetching: false,
      };
    case UPDATE_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case SET_PREV_POST:
      return {
        ...state,
        prevPost: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
}
