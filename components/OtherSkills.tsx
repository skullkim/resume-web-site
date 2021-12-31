import styled from "styled-components";
import React from 'react';

import CommonPage from "./CommonPage";
import {ImagePath, PageTitle} from "../lib/datatPath";
import {PageLogo, SkillRowBox, SkillsBox} from "./style/commonStyled";

const SkillSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  @media (max-width: 1100px) {
    align-items: center;
  }
`;

const SkillCategory = styled.h1`
  font-size: 40px;
  margin-bottom: 13px;
  margin-top: 0;
  
  @media (max-width: 1100px) {
    font-size: 2.5em;
  }
  
  @media (max-width: 420px) {
    font-size: 1.5em;
  }
`;

const OtherSkillLogo = styled.img`
  width: 5vw;
  margin-right: 20px;
  margin-bottom: 11.5px;

  @media (max-width: 530px) {
    width: 7vw;
  }
  
  @media (max-width: 110px) {
    width: 4vw;
  }
`;

const OtherSkillRowBox = styled(SkillRowBox)`
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 27vw;
  
`;

const OtherSkillsBox = styled(SkillsBox)`
  height: 60vh;
  justify-content: flex-start;
  position: relative;
  top: -0.5vh;
  right: 2vw;
  
  @media (min-width: 800px) and (max-width: 1100px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 10px;
    justify-content: center;
    align-items: flex-start;
  }
`;

const OtherSkillPageLogo = styled(PageLogo)`
  height: 58vh;
  right: 5.5vw;  
  top: 7vh;
  
  @media (max-width: 1140px) {
    width: 40vw;
    height: auto;
  }

  @media (min-width: 800px) and (max-width: 1100px) {
    
  }
`;

const OtherSkills: React.FC = () => {
 return(
   <CommonPage pageTitle={PageTitle.OtherSkills}>
     <>
       <OtherSkillPageLogo src={ImagePath.otherSkillsLogo} alt="other skills logo"/>
       <OtherSkillsBox>
         <SkillSection>
           <SkillCategory>Current Learning</SkillCategory>
           <OtherSkillRowBox>
             <OtherSkillLogo src={ImagePath.docker} alt="docker logo"/>
             <OtherSkillLogo src={ImagePath.nginx} alt="nginx logo"/>
             <OtherSkillLogo src={ImagePath.java} alt="java logo"/>
           </OtherSkillRowBox>
         </SkillSection>

         <SkillSection>
           <SkillCategory>Experienced Skills</SkillCategory>
           <OtherSkillRowBox>
             <OtherSkillLogo src={ImagePath.javaScript} alt="js logo"/>
             <OtherSkillLogo src={ImagePath.jquery} alt="jquery logo"/>
             <OtherSkillLogo src={ImagePath.nunjucks} alt="nunjucks logo"/>
             <OtherSkillLogo src={ImagePath.cplusplus} alt="cplusplus logo"/>
             <OtherSkillLogo src={ImagePath.c} alt="c logo"/>
           </OtherSkillRowBox>
         </SkillSection>

         <SkillSection>
           <SkillCategory>Favorite Tools</SkillCategory>
           <OtherSkillRowBox>
             <OtherSkillLogo src={ImagePath.github} alt="github logo"/>
             <OtherSkillLogo src={ImagePath.slack} alt="slack logo"/>
             <OtherSkillLogo src={ImagePath.notion} alt="notion logo"/>
             <OtherSkillLogo src={ImagePath.vim} alt="vim logo"/>
             <OtherSkillLogo src={ImagePath.webstorm} alt="webstorm logo"/>
             <OtherSkillLogo src={ImagePath.datagrip} alt="datagrip logo"/>
             <OtherSkillLogo src={ImagePath.intellij} alt="intellij logo"/>
           </OtherSkillRowBox>
         </SkillSection>
       </OtherSkillsBox>
     </>

   </CommonPage>
 );
}

export default OtherSkills;