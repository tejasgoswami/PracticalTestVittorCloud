import { all, takeEvery, put } from "redux-saga/effects";

import { LOGIN_USER } from "../action/types/index";
import {
  loginUserFailure,
  loginUserSuccess,
} from "../action/loginUser";
import API from "../../utils/axios";
import { getProposalID } from "../../utils/helper";

function* loginUserRequest(action) {
  try {
    const proposalId = getProposalID();
    const res = yield API.put(
      `api/arogya-sanjeevani/quote/proposal/${proposalId}/`,
      action.payload
    );
    yield put(loginUserSuccess(res));
  } catch (error) {
    yield put(loginUserFailure(error));
  }
}

function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginUserRequest);
}

export default function* rootSaga() {
  yield all([watchLoginUser()]);
}
