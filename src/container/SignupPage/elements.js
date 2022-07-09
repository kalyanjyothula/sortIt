import styled from "styled-components";
import newHere from "../../images/new-here.jpg";
import Button from "../../components/Button";

export const SignUpPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignUpPageConatinerDivision = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
`;

export const SignUpPageImageDiv = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
      to top,
      rgba(14, 45, 165, 0.8),
      rgba(14, 45, 165, 0.8)
    ),
    url(${newHere}) center/cover fixed no-repeat;
  width: 50%;
  height: calc(100vh - 50px);
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

export const SignupUserAwareContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 0.25rem 3rem;
`;

export const SignUpContentHeader = styled.h1`
  line-height: 1.2;
  font-size: 3.4rem;
  font-weight: 400;
  color: #fff;
`;

export const SignUpParagraph = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.5rem;
  font-size: 1.35rem;
  font-weight: 300;
`;

export const SignUpPageSignup = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 2rem 4rem;
  flex-grow: 1;
`;

export const SignUpPageHeader = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const SignUpPageForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SignUpInpuLableContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

export const SignUpInputLabel = styled.label`
  line-height: 1.5;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

export const SignUpInputField = styled.input`
  height: 3rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid lightgray;
`;

export const SubmitButton = styled(Button)`
  margin-top: 1.5rem;
  height: 3rem;
  border: none;
  background: rgba(14, 45, 165, 0.8);
`;
