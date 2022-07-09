import { all } from "redux-saga/effects";
import { AppSaga } from "../container/App/saga";
import { signUpPageSaga } from "../container/SignupPage/saga";

export function* watcherSaga() {
  // console.log(...AppSaga)
  yield all([...AppSaga, ...signUpPageSaga]);
  // yield takeLatest(getUser.type, getUserSaga);
}
