import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  FETCH_SUB_SUCCESS,
} from "../actions";

const initialState = {
  subPredictions: {},
  loggedIn: false,
  error: "",
  token: "",
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
    case FETCH_SUB_SUCCESS:
      return {
        ...state,
        subPredictions: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}
