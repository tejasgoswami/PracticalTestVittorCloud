import {
    LOGIN_USER,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
  } from "./types/index";
  
  export const loginUser = (payload) => ({
    type: LOGIN_USER,
    payload,
  });
  
  export const loginUserSuccess = (payload) => ({
    type: LOGIN_USER_SUCCESS,
    payload,
  });
  
  export const loginUserFailure = (payload) => ({
    type: LOGIN_USER_FAILURE,
    payload,
  });
  