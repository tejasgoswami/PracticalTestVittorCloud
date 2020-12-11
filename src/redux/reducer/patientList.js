import {
    GET_PATIENT_LIST,
    GET_PATIENT_LIST_SUCCESS,
    GET_PATIENT_LIST_FAILURE,
  } from "../action/types";
  
  const INIT_STATE = {
    loading: false,
    patientList: null,
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case GET_PATIENT_LIST:
        return { ...state, loading: true };
      case GET_PATIENT_LIST_SUCCESS:
        return { ...state, loading: false, patientList: action.payload };
      case GET_PATIENT_LIST_FAILURE:
        return { ...state, loading: false, patientList: action.payload };
      default:
        return state;
    }
  };
  