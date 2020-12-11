import {
    CREAT_USER,
    CREAT_USER_SUCCESS,
    CREAT_USER_FAILURE,
  } from "../action/types";
  
  const INIT_STATE = {
    loading: false,
    signupUser: null,
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case CREAT_USER:
        return { ...state, loading: true };
      case CREAT_USER_SUCCESS:
        return { ...state, loading: false, signupUser: action.payload };
      case CREAT_USER_FAILURE:
        return { ...state, loading: false, signupUser: action.payload };
      default:
        return state;
    }
  };
  