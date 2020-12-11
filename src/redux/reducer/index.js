import { combineReducers } from "redux";

import login from "./login";
import signup from "./signup";
import patientDetail from "./patientDetail";
import patientlist from "./patientList";
import addPatient from "./addPatient";

const appReducer = combineReducers({
  login,
  signup,
  patientDetail,
  patientlist,
  addPatient
});

const reducers = (state, action) => {
  return appReducer(state, action);
};

export default reducers;
