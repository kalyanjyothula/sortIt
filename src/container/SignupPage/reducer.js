import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createUserDetails: {
    name: "",
    email: "",
    password: "",
  },
  loading: false,
};

const createAccountReducer = createSlice({
  name: "createAccount",
  initialState: initialState,
  reducers: {
    updatedUserDetails(state, { payload: { id, value } }) {
      const createUserDetails = { ...state.createUserDetails };
      createUserDetails[`${id}`] = value;
      return {
        ...state,
        createUserDetails,
        createAccountSuccessMsg: "",
        createAccountErrorMsg: "",
      };
    },
    createUserAccount(state, { payload }) {
      return {
        ...state,
        loading: true,
        createAccountSuccessMsg: "",
        createAccountErrorMsg: "",
      };
    },
    createAccountSuccess(state, { payload }) {
      return {
        ...state,
        loading: false,
        createAccountSuccessMsg: "Account Created Successfully !",
      };
    },
    createAccountFail(state, { payload }) {
      return {
        ...state,
        loading: false,
        createAccountErrorMsg: "Something Went Wrong !",
      };
    },
  },
});

export const {
  updatedUserDetails,
  createUserAccount,
  createAccountSuccess,
  createAccountFail,
} = createAccountReducer.actions;

export const signupPageSelector = (state) => state.createAccount;

export default createAccountReducer.reducer;
