import React from 'react';
import styled from 'styled-components';

import CommonPage from "./CommonPage";
import {
  aboutMeFavoriteSentence,
  aboutMeIntro1,
  aboutMeIntro2,
  aboutMeIntro3, aboutMeIntro4, blogUrl, blogUrlSentence, gitHubUrl, gitHubUrlSentence,
  ImagePath,
  PageTitle
} from "../lib/datatPath";

const MyImage = styled.img`
  height: 63vh;
  position: relative;
  top: 3.5vh;
  left: 1vw;
`;

const IntroductionBox = styled.section`
  width: 60vw;
`;

const FavoriteSentenceBox = styled.div`
  width: 50vw;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  //bottom: 2vh;
  left: 5vw;
`;

const LapTopSvg = styled.img`
  width: 7vw;
`;

const ToolsSvg = styled.img`
  width: 5vw;
  position: relative;
  bottom: 2.5vh;
`;

const FavoriteSentence = styled.h1`
  font-size: 40px;
  margin: 0;
  position: relative;
  bottom: 2.5vh;

  @media (max-width: 650px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

const Introduction = styled.div`
  margin-left: 5vw;
  width: 50vw;
  position: relative;
  bottom: 5vh;
`;

const Sentence = styled.p`
  width: 57vw;
  font-size: 20px;
  font-weight: bold;
`;

const GithubBlogBox = styled.div`
  width: 60vw;
  margin-left: 5vw;
  position: relative;
  bottom: 8vh;
`;

const Link = styled.a`
  display: flex;
`;

const LinkSvg = styled.img`
  margin-right: 1vw;
  width: 3vw;
`;

const AboutMe: React.FC = () => {
  return (
    <CommonPage pageTitle={PageTitle.AboutMe}>
      <>
        <MyImage src={ImagePath.myImage} alt='my image' />
        <IntroductionBox>
          <FavoriteSentenceBox>
            <LapTopSvg src={ImagePath.laptopSvg} alt="laptop image"/>
            <FavoriteSentence>{aboutMeFavoriteSentence}</FavoriteSentence>
            <ToolsSvg src={ImagePath.toolsSvg} alt="tools image"/>
          </FavoriteSentenceBox>
          <Introduction>
            <Sentence>&nbsp;&nbsp;{aboutMeIntro1}</Sentence>
            <Sentence>&nbsp;&nbsp;{aboutMeIntro2}</Sentence>
            <Sentence>&nbsp;&nbsp;{aboutMeIntro3}</Sentence>
            <Sentence>&nbsp;&nbsp;{aboutMeIntro4}</Sentence>
          </Introduction>
          <GithubBlogBox>
            <Link href={gitHubUrl}>
              <LinkSvg src={ImagePath.githubSvg} alt='github logo'/>
              <Sentence>{gitHubUrlSentence}</Sentence>
            </Link>
            <Link href={blogUrl}>
              <LinkSvg src={ImagePath.blogSvg} alt='blog image'/>
              <Sentence>{blogUrlSentence}</Sentence>
            </Link>
          </GithubBlogBox>
        </IntroductionBox>
      </>
    </CommonPage>
  );
}

export default AboutMe;