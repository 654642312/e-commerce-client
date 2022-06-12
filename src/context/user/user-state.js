import React, { useReducer } from "react";
import { checkLogin, closeSession, saveToken } from "../../helper/helpers";
import { LOGIN, LOGOUT } from "../types";
import UserContext from "./user-context";
import UserReducer from "./user-reducer";

const UserState = (props) => {
  const initialState = {
    isLogin: checkLogin(),
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  
  const login = (token) => {
    saveToken(token);
    dispatch({ type: LOGIN, payload: true });
  }

  const logOut = () => {
    closeSession();
    dispatch({ type: LOGOUT, payload: false });
  }

  return (
    <UserContext.Provider
      value={{
        isLogin: state.isLogin,
        login,
        logOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;