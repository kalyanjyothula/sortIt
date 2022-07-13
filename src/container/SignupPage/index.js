import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";

import {
  SignUpContentHeader,
  SignUpInpuLableContainer,
  SignUpInputField,
  SignUpInputLabel,
  SignUpPageConatinerDivision,
  SignUpPageContainer,
  SignUpPageForm,
  SignUpPageHeader,
  SignUpPageImageDiv,
  SignUpPageSignup,
  SignUpParagraph,
  SignupUserAwareContent,
  SubmitButton,
} from "./elements";
import {
  createUserAccount,
  signupPageSelector,
  updatedUserDetails,
} from "./reducer";
import { useNavigate } from "react-router-dom";
import { ToastContainerMsg } from "../../components/Toast/elements";

export default function SignupPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInputChange = ({ target }, id) => {
    dispatch(updatedUserDetails({ id, value: target.value }));
  };
  const {
    createUserDetails,
    loading,
    createAccountSuccessMsg,
    createAccountErrorMsg,
  } = useSelector(signupPageSelector);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createUserAccount(createUserDetails));
  };
  // useEffect(() => {
  //   toast.error("error");
  // }, []);

  useEffect(() => {
    if (createAccountErrorMsg) {
      toast.error(createAccountErrorMsg);
    }
    if (createAccountSuccessMsg) {
      toast.success(createAccountSuccessMsg);
      navigate('/app')
    }
  }, [createAccountErrorMsg, createAccountSuccessMsg, navigate]);

  return (
    <SignUpPageContainer>
      {createAccountSuccessMsg || createAccountErrorMsg ? (
        <ToastContainerMsg />
      ) : (
        ""
      )}

      <Header blockSignup={true} />
      <SignUpPageConatinerDivision>
        <SignUpPageImageDiv>
          <SignupUserAwareContent>
            <SignUpContentHeader>
              Looks like you're new here!
            </SignUpContentHeader>
            <SignUpParagraph>
              Join our group in few minutes! Sign up with your details to get
              started
            </SignUpParagraph>
          </SignupUserAwareContent>
        </SignUpPageImageDiv>
        <SignUpPageSignup>
          <SignUpPageHeader>Sign Up</SignUpPageHeader>
          <SignUpPageForm onSubmit={handleOnSubmit}>
            <SignUpInpuLableContainer>
              <SignUpInputLabel htmlFor="name">Full Name</SignUpInputLabel>
              <SignUpInputField
                id="name"
                type="text"
                placeholder="Enter Full Name"
                required
                onChange={(e) => handleInputChange(e, "name")}
              />
            </SignUpInpuLableContainer>
            <SignUpInpuLableContainer>
              <SignUpInputLabel htmlFor="email">Email</SignUpInputLabel>
              <SignUpInputField
                id="email"
                type="email"
                placeholder="Enter Email"
                required
                onChange={(e) => handleInputChange(e, "email")}
              />
            </SignUpInpuLableContainer>
            <SignUpInpuLableContainer>
              <SignUpInputLabel htmlFor="password">Password</SignUpInputLabel>
              <SignUpInputField
                id="password"
                type="password"
                placeholder="Enter Password"
                onChange={(e) => handleInputChange(e, "password")}
                // pattern="[0-9]{10}"
                required
              />
            </SignUpInpuLableContainer>
            <SubmitButton type="submit" loading={loading ? 1 : 0}>
              Sign Up
            </SubmitButton>
          </SignUpPageForm>
        </SignUpPageSignup>
      </SignUpPageConatinerDivision>
    </SignUpPageContainer>
  );
}

SignupPage.prototype = {
  loading: PropTypes.bool,
  createUserDetails: PropTypes.object,
};
