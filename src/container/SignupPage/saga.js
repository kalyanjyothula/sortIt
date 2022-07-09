import { takeLatest, call, put } from "redux-saga/effects";
import { createUserAccount } from "./reducer";
import axios from "axios";

export function* createUserAccountAsync(action) {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const { data } = yield call(axios, { method: "GET", url });
    // console.log(action, "saga");
  } catch (error) {
    console.log(error);
  }
}

export const signUpPageSaga = [
  takeLatest(createUserAccount.type, createUserAccountAsync),
];
