import styled from "styled-components";
import newHere from "../../images/new-here.jpg";
import Button from "../../components/Button";

export const LoginPageContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LoginPageImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
      to top,
      rgba(14, 45, 165, 0.8),
      rgba(14, 45, 165, 0.8)
    ),
    url(${newHere}) center/cover fixed no-repeat;
  width: 50%;
  padding: 1rem 2rem;
  height: calc(100vh - 50px);
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

export const LoginPageNoteHeader = styled.h1`
  line-height: 1.2;
  font-size: 3.4rem;
  font-weight: 400;
  color: #fff;
`;

export const LoginPageNoteContent = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.5rem;
  font-size: 1.35rem;
  font-weight: 300;
`;

export const LoginPageUserFiledsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  padding: 0.25rem 4rem;
  /* margin: 2rem 4rem 0rem; */
  flex-grow: 1;
`;

export const LoginPageTitleHeader = styled.h1`
  font-size: 2rem;
  @media screen and (max-width: 992px) {
    margin-top: 2rem;
  }
`;

export const LoginPageForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginInpuLableContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

export const LoginInputLabel = styled.label`
  line-height: 1.5;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

export const LoginInputField = styled.input`
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
export const LoginWithOAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginWithOAuthContent = styled.p`
  font-size: 0.75rem;
  margin-top: 1rem;
  margin-bottom: 0;
  align-self: center;
`;

export const LoginPageOAuthContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const LoginPageOAuthIconWrapper = styled.div`
  padding: 0.25rem;
`;
