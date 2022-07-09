import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../container/App/reducer";
import createAccountReducer from "../container/SignupPage/reducer";

export const reducer = combineReducers({
  user: userReducer,
  createAccount: createAccountReducer,
});
