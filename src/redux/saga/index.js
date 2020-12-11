import { all } from "redux-saga/effects";

import AddPatient from "./addPatient";
import LoginUser from "./login";
import PatientDetails from "./patientDetails";
import PatientList from "./patientList";
import signUP from "./signup";

export default function* rootSaga() {
  yield all([LoginUser(), AddPatient(), PatientDetails(),PatientList(),signUP()]);
}
