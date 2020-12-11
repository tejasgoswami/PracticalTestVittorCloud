import {
    ADD_PATIENT,
    ADD_PATIENT_FAILURE,
    ADD_PATIENT_SUCCESS,
  } from "./types/index";
  
  export const addPatientDetail = (payload) => ({
    type: ADD_PATIENT,
    payload,
  });
  
  export const addPatientDetailSuccess = (payload) => ({
    type: ADD_PATIENT_SUCCESS,
    payload,
  });
  
  export const addPatientDetailFailure = (payload) => ({
    type: ADD_PATIENT_FAILURE,
    payload,
  });
  