import React from "react";
import Header from "../../components/Header";
import Story from "../../images/story.jpg";
import Company from "../../images/Tcs.png";
import Tech from "../../images/Tech.png";
import Jio from "../../images/Jio.png";
import {
  FeatureBoxConatiner,
  FeatureContentContainer,
  FeatureSVGContainer,
  FeatureText,
  FeatureTitle,
  HomePageBCImageContainer,
  HomePageBorderLine,
  HomePageFeaturesContainer,
  HomePageSubTitle,
  HomePageTitleHeader,
  StoriesBottomBar,
  StoriesContainer,
  StoriesContainerHeaderContainer,
  StoriesContentContainer,
  StoriesContentImgWrapper,
  StoriesHeader,
  StoriesImg,
  HomePageConatinerWrapper,
  StoryContentWrapper,
  ServicesContainer,
  ServicesContainerHeaderContainer,
  ServiceHeader,
  ServiceBottomBar,
  ServiesCompanyImgContainer,
  ServiesCompanyImg,
  FooterContainer,
  SocialIconsContainer,
  SocialCopyRightContainer,
} from "./elements";
import Visual from "../../icons/Visual";
import Colabrate from "../../icons/Colabrate";
import Track from "../../icons/Track";

export default function HomePage() {
  return (
    <HomePageConatinerWrapper>
      <Header />
      <HomePageBCImageContainer>
        <HomePageTitleHeader>
          one app that manges your events
        </HomePageTitleHeader>
        <HomePageSubTitle>
          Plan, track, and manage any type of work with project management that
          flexes to your teams needs.Tackle work from any angle with 20+
          real-time views that adapt to your needs. Track tasks on List, update
          workflows on a Board, drag-and-drop due dates on a Calendar, and so
          much more.
        </HomePageSubTitle>
      </HomePageBCImageContainer>
      <HomePageBorderLine />
      <HomePageFeaturesContainer>
        <FeatureBoxConatiner>
          <FeatureSVGContainer>
            <Visual height={30} width={30} />
          </FeatureSVGContainer>
          <FeatureContentContainer>
            <FeatureTitle>Visualize & plan</FeatureTitle>
            <FeatureText>
              Manage any project from start to finish with highly customizable
              views that make project planning a breeze
            </FeatureText>
          </FeatureContentContainer>
        </FeatureBoxConatiner>
        <FeatureBoxConatiner>
          <FeatureSVGContainer>
            <Colabrate height={25} width={32} />
          </FeatureSVGContainer>
          <FeatureContentContainer>
            <FeatureTitle>Collaborate</FeatureTitle>
            <FeatureText>
              Work with your team in real-time with Chat, assign comments for
              action items, and never miss a beat with notifications that bring
              everything in one place.
            </FeatureText>
          </FeatureContentContainer>
        </FeatureBoxConatiner>
        <FeatureBoxConatiner>
          <FeatureSVGContainer>
            <Track height={25} width={30} />
          </FeatureSVGContainer>
          <FeatureContentContainer>
            <FeatureTitle>Track progress</FeatureTitle>
            <FeatureText>
              Add visual widgets for team members, tasks, sprints, time
              tracking, statuses, docs, embeds, and more.
            </FeatureText>
          </FeatureContentContainer>
        </FeatureBoxConatiner>
      </HomePageFeaturesContainer>
      <StoriesContainer>
        <StoriesContainerHeaderContainer>
          <StoriesHeader>Stories</StoriesHeader>
          <StoriesBottomBar />
        </StoriesContainerHeaderContainer>
        <StoriesContentContainer>
          <StoriesContentImgWrapper>
            <StoriesImg src={Story} alt="img" />
          </StoriesContentImgWrapper>
          <StoryContentWrapper>
            SortIt has become such an integral part of our work! By putting our
            work on SortIt and organizing it into Sprints, we made it easy to
            work across departments without overloading ourselves with meetings
            and email threads.
          </StoryContentWrapper>
        </StoriesContentContainer>
      </StoriesContainer>
      <ServicesContainer>
        <ServicesContainerHeaderContainer>
          <ServiceHeader>Servies</ServiceHeader>
          <ServiceBottomBar />
        </ServicesContainerHeaderContainer>
        <ServiesCompanyImgContainer>
          <ServiesCompanyImg src={Company} alt="cmp" />
          <ServiesCompanyImg src={Jio} alt="cmp1" />
          <ServiesCompanyImg src={Tech} alt="cmp2" />
        </ServiesCompanyImgContainer>
      </ServicesContainer>
      <FooterContainer>
        <SocialIconsContainer>
          <i
            className="bi bi-instagram"
            style={{
              fontSize: `1.5rem`,
              color: `#fff`,
              padding: `0.2rem 1rem`,
              cursor: `pointer`,
            }}
          ></i>
          <i
            className="bi bi-youtube"
            style={{
              fontSize: `1.5rem`,
              color: `#fff`,
              padding: `0.2rem 1rem`,
              cursor: `pointer`,
            }}
          ></i>
          <i
            className="bi bi-linkedin"
            style={{
              fontSize: `1.5rem`,
              color: `#fff`,
              padding: `0.2rem 1rem`,
              cursor: `pointer`,
            }}
          ></i>
          <i
            className="bi bi-twitter"
            style={{
              fontSize: `1.5rem`,
              color: `#fff`,
              padding: `0.2rem 1rem`,
              cursor: `pointer`,
            }}
          ></i>
          <i
            className="bi bi-github"
            style={{
              fontSize: `1.5rem`,
              color: `#fff`,
              padding: `0.2rem 1rem`,
              cursor: `pointer`,
            }}
          ></i>
        </SocialIconsContainer>
        <SocialCopyRightContainer>
          copyright &#169; 2022
        </SocialCopyRightContainer>
      </FooterContainer>
    </HomePageConatinerWrapper>
  );
}
