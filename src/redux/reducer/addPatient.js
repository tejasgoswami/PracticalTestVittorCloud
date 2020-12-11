import {
    ADD_PATIENT,
    ADD_PATIENT_SUCCESS,
    ADD_PATIENT_FAILURE,
  } from "../action/types";
  
  const INIT_STATE = {
    loading: false,
    addPatient: null,
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case ADD_PATIENT:
        return { ...state, loading: true };
      case ADD_PATIENT_SUCCESS:
        return { ...state, loading: false, addPatient: action.payload };
      case ADD_PATIENT_FAILURE:
        return { ...state, loading: false, addPatient: action.payload };
      default:
        return state;
    }
  };
  