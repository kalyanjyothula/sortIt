import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";

import { SubmitLogin, submitLoginFailed, submitLoginSuccess } from "./reducer";

export function* submitLoginAsync({ payload }) {
  try {
    const url = "/api/login";
    console.log(payload, "saga");
    const { data } = yield call(axios, {
      method: "POST",
      data: payload,
      url,
    });
    const { success } = data;

    if (success) {
      yield window.localStorage.setItem("loginUser", JSON.stringify(payload));
      yield put(submitLoginSuccess(data));
    } else yield put(submitLoginFailed());
  } catch (err) {
    console.log(err);
    yield put(submitLoginFailed());
  }
}

export const loginPageSaga = [takeLatest(SubmitLogin.type, submitLoginAsync)];
