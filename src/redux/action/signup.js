import {
    CREAT_USER,
    CREAT_USER_FAILURE,
    CREAT_USER_SUCCESS,
  } from "./types/index";
  
  export const createUser = (payload) => ({
    type: CREAT_USER,
    payload,
  });
  
  export const createUserSuccess = (payload) => ({
    type: CREAT_USER_SUCCESS,
    payload,
  });
  
  export const createUserFailure = (payload) => ({
    type: CREAT_USER_FAILURE,
    payload,
  });
  