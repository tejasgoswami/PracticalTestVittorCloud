import {
    GET_PATIENT_DETAILS,
    GET_PATIENT_DETAILS_SUCCESS,
    GET_PATIENT_DETAILS_FAILURE,
  } from "../action/types";
  
  const INIT_STATE = {
    loading: false,
    patientDetails: null,
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case GET_PATIENT_DETAILS:
        return { ...state, loading: true };
      case GET_PATIENT_DETAILS_SUCCESS:
        return { ...state, loading: false, quoteDetails: action.payload };
      case GET_PATIENT_DETAILS_FAILURE:
        return { ...state, loading: false, quoteDetails: action.payload };
      default:
        return state;
    }
  };
  