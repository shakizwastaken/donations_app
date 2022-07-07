import { createContext, useReducer } from "react";

//import constants
import {
  login_failed,
  login_pending,
  login_start,
  login_success,
  logout,
} from "./constants";

//initial state
const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  isAuth: localStorage.getItem("user") ? true : false,
  loading: false,
  err: false,
};

//reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case login_start:
      return state;
    case login_pending:
      return {
        ...state,
        loading: true,
      };
    case login_success:
      const user = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        isAuth: true,
        user,
        loading: false,
      };
    case login_failed:
      return {
        ...state,
        user: null,
        isAuth: false,
        loading: false,
        err: action.payload,
      };

    case logout:
      return initialState;

    default:
      return state;
  }
};

//export context
export const AuthContext = createContext({});

//export context component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
