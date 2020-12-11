import {
    GET_PATIENT_DETAILS,
    GET_PATIENT_DETAILS_FAILURE,
    GET_PATIENT_DETAILS_SUCCESS,
  } from "./types/index";
  
  export const getPatientDetail = (payload) => ({
    type: GET_PATIENT_DETAILS,
    payload,
  });
  
  export const getPatientDetailSuccess = (payload) => ({
    type: GET_PATIENT_DETAILS_SUCCESS,
    payload,
  });
  
  export const getPatientDetailFailure = (payload) => ({
    type: GET_PATIENT_DETAILS_FAILURE,
    payload,
  });
  