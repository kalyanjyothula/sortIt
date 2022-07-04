import styled, { keyframes } from "styled-components";
import IMG from "../../images/open_img.jpg";

const SlideFromLeft = keyframes`
 0% {
    transform: translateX(-1000px);
    opacity: 0;
  }

  50% {
    transform: translateX(200px);
    opacity: 0.5;
  }

  75% {
    transform: translateX(-50px);
    opacity: 0.75;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const SlideFromRight = keyframes`
 0% {
    transform: translateX(1000px);
    opacity: 0;
  }

  50% {
    transform: translateX(-200px);
    opacity: 0.5;
  }

  75% {
    transform: translateX(50px);
    opacity: 0.75;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const HomePageConatinerWrapper = styled.div`
  display: flex;
`;

export const HomePageBCImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 35px);
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.1)
    ),
    url(${IMG}) center/cover fixed no-repeat;
`;

export const HomePageTitleHeader = styled.h1`
  color: rgb(255, 255, 255);
  animation: ${SlideFromLeft} 2s ease 1;
  letter-spacing: var(--letter-spacing);
  font-size: 2.8rem;
  text-align: center;
  text-transform: capitalize;
`;

export const HomePageSubTitle = styled.p`
  color: rgba(250, 255, 255, 0.6);
  /* letter-spacing: var(--letter-spacing); */
  width: 70%;
  text-align: center;
  animation: ${SlideFromRight} 2s ease 1;
  max-width: 1190px;
`;

export const HomePageBorderLine = styled.div`
  height: 5px;
  background: linear-gradient(to right, #4dff00, #00ffa6, #0017ff, #f300ff);
`;

export const HomePageFeaturesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #edfafe;
  padding: 1rem;
`;

export const FeatureBoxConatiner = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0.3rem;
  box-shadow: var(--dark-shadow);
  width: 380px;
  height: 180px;
  margin: 0.85rem;
  padding: 0.75rem 0.25rem;
  background: #fff;
  position: relative;
`;

export const FeatureSVGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  height: 60px;
  padding: 0 0.8rem;
  background: #f5f2f5;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -15px;
  margin-left: -20px;
  border: 1px solid lightgray;
  box-shadow: var(--light-shadow);
  /* align-self: flex-start; */
  /* margin-top: 1.65rem; */
`;

export const FeatureContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0.50rem 0.5rem; */
  padding-left: 0.3rem;
  width: 70%;
`;

export const FeatureTitle = styled.h1`
  font-size: 1.5rem;
  text-transform: capitalize;
`;

export const FeatureText = styled.p`
  color: #617d98;
  font-size: 0.85rem;
`;

export const StoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f2f5;
  padding: 0.25rem;
`;

export const StoriesContainerHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StoriesHeader = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.25rem;
  line-height: 1.5;
`;

export const StoriesBottomBar = styled.div`
  height: 5px;
  width: 100px;
  border-radius: 0.25rem;
  background: blue;
  color: red;
`;
