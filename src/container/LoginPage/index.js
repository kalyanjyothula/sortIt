import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isMobile } from "react-device-detect";
import Header from "../../components/Header";
import { ToastContainerMsg } from "../../components/Toast/elements";
// import GoogleColor from "../../icons/GoogleColor";
import {
  LoginInpuLableContainer,
  LoginInputField,
  LoginInputLabel,
  LoginPageContainer,
  LoginPageContainerWrapper,
  LoginPageForm,
  LoginPageImageDiv,
  LoginPageNoteContent,
  LoginPageNoteHeader,
  LoginPageOAuthContainer,
  LoginPageOAuthIconWrapper,
  LoginPageTitleHeader,
  LoginPageUserFiledsContainer,
  LoginWithOAuthContainer,
  LoginWithOAuthContent,
  SubmitButton,
} from "./elements";
import {
  loginPageSelector,
  updateLoginUserDetails,
  SubmitLogin,
} from "./reducer";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    loading,
    loginUserDetails,
    isSuccess,
    loginErrorMsg,
    loginSuccessMsg,
  } = useSelector(loginPageSelector);
  const handleInputChange = ({ target }, id) => {
    dispatch(updateLoginUserDetails({ id, value: target.value }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(SubmitLogin(loginUserDetails));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/app");
    }
    if (loginErrorMsg) {
      toast.error(loginErrorMsg);
    }
    if (loginSuccessMsg) {
      toast.success(loginSuccessMsg);
    }
  }, [isSuccess, loginErrorMsg, loginSuccessMsg, navigate]);

  return (
    <LoginPageContainerWrapper>
      {loginErrorMsg || loginSuccessMsg ? <ToastContainerMsg /> : ""}
      <Header blockLogin={true} />
      <LoginPageContainer>
        <LoginPageImageDiv>
          <LoginPageNoteHeader> Welcome back !</LoginPageNoteHeader>
          <LoginPageNoteContent>
            Access to the most powerfull tool in the entire design and web
            industry. {isMobile ? <h2>Scroll down for Login </h2> : ""}
          </LoginPageNoteContent>
        </LoginPageImageDiv>
        <LoginPageUserFiledsContainer>
          <LoginPageTitleHeader>Log in</LoginPageTitleHeader>
          <LoginPageForm onSubmit={handleOnSubmit}>
            <LoginInpuLableContainer>
              <LoginInputLabel>Email</LoginInputLabel>
              <LoginInputField
                type="email"
                placeholder="Enter Email"
                required
                onChange={(e) => handleInputChange(e, "email")}
              />
            </LoginInpuLableContainer>
            <LoginInpuLableContainer>
              <LoginInputLabel>Password</LoginInputLabel>
              <LoginInputField
                type="password"
                placeholder="Enter Password"
                onChange={(e) => handleInputChange(e, "password")}
                required
              />
            </LoginInpuLableContainer>
            <SubmitButton type="submit" loading={loading ? 1 : 0}>
              Login
            </SubmitButton>
          </LoginPageForm>
          <LoginWithOAuthContainer>
            <LoginWithOAuthContent>Login with</LoginWithOAuthContent>
            <LoginPageOAuthContainer>
              <LoginPageOAuthIconWrapper>
                {/* <GoogleColor width={30} height={30} /> */}
                <i
                  className="bi bi-google"
                  style={{
                    fontSize: `2rem`,
                    color: `#DB4437`,
                    padding: `0.2rem 1rem`,
                    cursor: `pointer`,
                  }}
                ></i>
              </LoginPageOAuthIconWrapper>
              <LoginPageOAuthIconWrapper>
                <i
                  className="bi bi-linkedin"
                  style={{
                    fontSize: `2rem`,
                    color: `#0077b5`,
                    padding: `0.2rem 1rem`,
                    cursor: `pointer`,
                  }}
                ></i>
              </LoginPageOAuthIconWrapper>
              <LoginPageOAuthIconWrapper>
                <i
                  className="bi bi-instagram"
                  style={{
                    fontSize: `2rem`,
                    color: `#e95950`,
                    padding: `0.2rem 1rem`,
                    cursor: `pointer`,
                  }}
                ></i>
              </LoginPageOAuthIconWrapper>

              <LoginPageOAuthIconWrapper>
                <i
                  className="bi bi-github"
                  style={{
                    fontSize: `2rem`,
                    padding: `0.2rem 1rem`,
                    cursor: `pointer`,
                  }}
                ></i>
              </LoginPageOAuthIconWrapper>
            </LoginPageOAuthContainer>
          </LoginWithOAuthContainer>
        </LoginPageUserFiledsContainer>
      </LoginPageContainer>
    </LoginPageContainerWrapper>
  );
}
