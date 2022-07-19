import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginUserDetails: {
    email: "",
    password: "",
  },
  loading: false,
  isSuccess: false,
};

const loginPageReducer = createSlice({
  name: "loginPage",
  initialState: initialState,
  reducers: {
    updateLoginUserDetails(state, { payload: { id, value } }) {
      const loginUserDetails = { ...state.loginUserDetails };
      loginUserDetails[`${id}`] = value;
      return {
        ...state,
        loginUserDetails,
        loginSuccessMsg: "",
        loginErrorMsg: "",
      };
    },
    SubmitLogin(state) {
      // console.log(state, "reducer");
      return {
        ...state,
        loading: true,
        loginSuccessMsg: "",
        loginErrorMsg: "",
        isSuccess: false,
      };
    },
    submitLoginSuccess(state) {
      return {
        ...state,
        loading: false,
        loginSuccessMsg: "Login Successful",
        loginErrorMsg: "",
        isSuccess: true,
      };
    },
    submitLoginFailed(state) {
      return {
        ...state,
        loading: false,
        loginSuccessMsg: "",
        loginErrorMsg: " Incorrect email / password !",
        isSuccess: false,
      };
    },
  },
});

export const {
  updateLoginUserDetails,
  SubmitLogin,
  submitLoginSuccess,
  submitLoginFailed,
} = loginPageReducer.actions;

export const loginPageSelector = (state) => state.loginPage;

export default loginPageReducer.reducer;
