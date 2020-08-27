import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions";

const initialState = {
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
    default:
      return state;
  }
}
