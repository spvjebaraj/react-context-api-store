import makeStore from "../makeStore";

export const ACTIONS = {
  SET_USER_INIT: "SET_USER_INIT",
  SET_USER_SUCCESS: "SET_USER_SUCCESS",
  SET_USER_FAILURE: "SET_USER_FAILURE",
  SET_STORE_EMPTY: "SET_STORE_EMPTY",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER_INIT:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ACTIONS.SET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        currentUser: action.payload.currentUser,
        userName: action.payload.userName,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case ACTIONS.SET_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        currentUser: null,
        userName: null,
        isLoggedIn: false,
      };
    case ACTIONS.SET_STORE_EMPTY:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

const [AuthProvider, useAuthStore, useAuthDispatch] = makeStore(
  authReducer,
  []
);

export { AuthProvider, useAuthStore, useAuthDispatch };
