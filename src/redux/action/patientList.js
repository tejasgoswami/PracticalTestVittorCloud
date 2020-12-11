import {
  GET_PATIENT_LIST,
  GET_PATIENT_LIST_FAILURE,
  GET_PATIENT_LIST_SUCCESS,
} from "./types/index";

export const getPatientList = (payload) => ({
  type: GET_PATIENT_LIST,
  payload,
});

export const getPatientListSuccess = (payload) => ({
  type: GET_PATIENT_LIST_SUCCESS,
  payload,
});

export const getPatientListFailure = (payload) => ({
  type: GET_PATIENT_LIST_FAILURE,
  payload,
});
