import React from "react";
import Header from "../../components/Header";
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
  StoriesHeader,
} from "./elements";
import Visual from "../../icons/Visual";
import Colabrate from "../../icons/Colabrate";
import Track from "../../icons/Track";

export default function HomePage(props) {
  return (
    <React.Fragment>
      <Header />
      <HomePageBCImageContainer>
        <HomePageTitleHeader>
          one app that manges your events
        </HomePageTitleHeader>
        <HomePageSubTitle>
          Plan, track, and manage any type of work with project management that
          flexes to your team's needs.Tackle work from any angle with 20+
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
      </StoriesContainer>
    </React.Fragment>
  );
}
