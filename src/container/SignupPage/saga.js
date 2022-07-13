import { takeLatest, call, put } from "redux-saga/effects";
import {
  createAccountFail,
  createAccountSuccess,
  createUserAccount,
} from "./reducer";
import axios from "axios";

export function* createUserAccountAsync({ payload }) {
  try {
    const url = "/api/signup";
    const {
      data: { success, token },
    } = yield call(axios, { method: "POST", data: payload, url });
    if (success) {
      yield localStorage.setItem('token', JSON.stringify(token))
      yield put(createAccountSuccess());
    }
    else yield put(createAccountFail());
  } catch (error) {
    console.log(error);
    yield put(createAccountFail());
  }
}

export const signUpPageSaga = [
  takeLatest(createUserAccount.type, createUserAccountAsync),
];
