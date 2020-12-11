import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
  } from "../action/types";
  
  const INIT_STATE = {
    loading: false,
    loginUser: null,
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return { ...state, loading: true };
      case LOGIN_USER_SUCCESS:
        return { ...state, loading: false, loginUser: action.payload };
      case LOGIN_USER_FAILURE:
        return { ...state, loading: false, loginUser: action.payload };
      default:
        return state;
    }
  };
  