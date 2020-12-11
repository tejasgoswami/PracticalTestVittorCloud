import { all, takeEvery, put } from "redux-saga/effects";

import { GET_PATIENT_DETAILS } from "../action/types/index";
import {
  getPatientDetailFailure,
  getPatientDetailSuccess,
} from "../action/patientDetails";
import API from "../../utils/axios";
import { getProposalID } from "../../utils/helper";

function* getPatientDetailsRequest(action) {
  try {
    const proposalId = getProposalID();
    const res = yield API.put(
      `api/arogya-sanjeevani/quote/proposal/${proposalId}/`,
      action.payload
    );
    yield put(getPatientDetailSuccess(res));
  } catch (error) {
    yield put(getPatientDetailFailure(error));
  }
}

function* watchGetPatientDetails() {
  yield takeEvery(GET_PATIENT_DETAILS, getPatientDetailsRequest);
}

export default function* rootSaga() {
  yield all([watchGetPatientDetails()]);
}
