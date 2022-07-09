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
      };
    },
    createUserAccount(state, { payload }) {
      return {
        ...state,
        loading: true,
      };
    },
  },
});

export const { updatedUserDetails, createUserAccount } =
  createAccountReducer.actions;

export const signupPageSelector = (state) => state.createAccount;

export default createAccountReducer.reducer;
