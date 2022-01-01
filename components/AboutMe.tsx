import React from 'react';
import styled from 'styled-components';

import CommonPage from "./CommonPage";
import {
  AboutMeData,
  ImagePath,
  PageTitle, Url
} from "../lib/datatPath";

const MyImage = styled.img`
  height: 63vh;
  position: relative;
  top: 3.5vh;
  left: 1vw;
  
  @media (max-width: 1100px) {
    height: 40vh;
    justify-self: center;
    top: 0;
  }
`;

const IntroductionBox = styled.section`
  width: 60vw;
  
  @media (max-width: 1100px) {
    position: relative;
    bottom: 2vh;
    height: 10vh;
  }
`;

const FavoriteSentenceBox = styled.div`
  width: 50vw;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  left: 5vw;
  
  @media (max-width: 400px) {
    width: 70vw;
  }
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
  font-size: 2.5em;
  margin: 0;
  position: relative;
  bottom: 2.5vh;

  @media (max-width: 1000px) {
    font-size: 1.5em;
  }

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

const Introduction = styled.div`
  margin-left: 5vw;
  width: 50vw;
  position: relative;
  bottom: 5vh;
  
  @media (max-width: 1100px) {
    margin-top: 30px;
  }
`;

const Sentence = styled.p`
  width: 53vw;
  font-size: 20px;
  font-weight: bold;
  
  @media (max-width: 1100px) {
    width: 80vw;
    margin: 0;
    font-size: 1.5em;
  }
  
  @media (max-width: 600px) {
    font-size: 1em;
  }
  
  @media (max-width: 400px) {
    width: 85vw;
  }
`;

//
const GithubBlogBox = styled.div`
  width: 50vw;
  margin-left: 5vw;
  position: relative;
  bottom: 5vh;
  
  @media (max-width: 400px) {
    width: 90vw;
  }
  
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
            <FavoriteSentence>{AboutMeData.favoriteSentence}</FavoriteSentence>
            <ToolsSvg src={ImagePath.toolsSvg} alt="tools image"/>
          </FavoriteSentenceBox>
          <Introduction>
            {AboutMeData.introduction.map(intro =>
              <Sentence key={intro}>&nbsp;&nbsp;{intro}</Sentence>)}
          </Introduction>
          <GithubBlogBox>
            <Link href={Url.github}>
              <LinkSvg src={ImagePath.githubSvg} alt='github logo'/>
              <Sentence>{AboutMeData.gitHubUrlSentence}</Sentence>
            </Link>
            <Link href={Url.blog}>
              <LinkSvg src={ImagePath.blogSvg} alt='blog image'/>
              <Sentence>{AboutMeData.blogUrlSentence}</Sentence>
            </Link>
          </GithubBlogBox>
        </IntroductionBox>
      </>
    </CommonPage>
  );
}

export default AboutMe;