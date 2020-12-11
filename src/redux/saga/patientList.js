import { all, takeEvery, put } from "redux-saga/effects";

import { GET_PATIENT_LIST } from "../action/types/index";
import {
  getPatientListFailure,
  getPatientListSuccess,
} from "../action/patientList";
import API from "../../utils/axios";
import { getProposalID } from "../../utils/helper";

function* getPatientListRequest(action) {
  try {
    const proposalId = getProposalID();
    const res = yield API.put(
      `api/arogya-sanjeevani/quote/proposal/${proposalId}/`,
      action.payload
    );
    yield put(getPatientListSuccess(res));
  } catch (error) {
    yield put(getPatientListFailure(error));
  }
}

function* watchGetPatientList() {
  yield takeEvery(GET_PATIENT_LIST, getPatientListRequest);
}

export default function* rootSaga() {
  yield all([watchGetPatientList()]);
}
