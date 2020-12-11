import { all, takeEvery, put } from "redux-saga/effects";

import { ADD_PATIENT } from "../action/types/index";
import {
  addPatientDetailFailure,
  addPatientDetailSuccess,
} from "../action/addPatient";
import API from "../../utils/axios";
import { getProposalID } from "../../utils/helper";

function* createContactDetailsRequest(action) {
  try {
    const proposalId = getProposalID();
    const res = yield API.put(
      `api/arogya-sanjeevani/quote/proposal/${proposalId}/`,
      action.payload
    );
    yield put(addPatientDetailSuccess(res));
  } catch (error) {
    yield put(addPatientDetailFailure(error));
  }
}

function* watchAddPatient() {
  yield takeEvery(ADD_PATIENT, createContactDetailsRequest);
}

export default function* rootSaga() {
  yield all([watchAddPatient()]);
}
