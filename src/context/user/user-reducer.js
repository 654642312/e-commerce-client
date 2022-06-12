import { LOGIN, LOGOUT } from "../types";

function UserReducer(state, action) {
  const { payload, type } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLogin: payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: payload,
      };
    default:
      return state;
  }
}

export default UserReducer;
