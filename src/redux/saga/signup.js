import { all, takeEvery, put } from "redux-saga/effects";

import { CREAT_USER } from "../action/types/index";
import {
  createUserFailure,
  createUserSuccess,
} from "../action/signup";
import API from "../../utils/axios";
import { getProposalID } from "../../utils/helper";

function* createUserRequest(action) {
    
  try {
    console.log('action',action)
    const proposalId = getProposalID();
    const res = yield API.put(
      `api/arogya-sanjeevani/quote/proposal/${proposalId}/`,
      action.payload
    );
    yield put(createUserSuccess(res));
  } catch (error) {
    yield put(createUserFailure(error));
  }
}

function* watchCreateUser() {
  yield takeEvery(CREAT_USER, createUserRequest);
}

export default function* rootSaga() {
  yield all([watchCreateUser()]);
}
