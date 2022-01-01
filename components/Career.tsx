import styled from 'styled-components';
import React from 'react';

import CommonPage from "./CommonPage";
import {Dot, PageLogo, SkillsBox} from "./style/commonStyled";
import {ImagePath, PageTitle, myCareer} from "../lib/datatPath";

const CareerBox = styled.div`
  display: flex;
  width: 55vw;
  
  @media (max-width: 1100px) {
    width: 80vw;
  }
`;

const CareerPageLogo = styled(PageLogo)`
  height: 58vh;
  right: 8vw;
  top: 5vh;
 
  @media (max-width: 1100px) {
    justify-self: center;
  }
  
  @media (max-width: 800px) {
    width: 50vw;
    height: auto;
  }
`;

const CareerSkillBox = styled(SkillsBox)`
  top: 10vh;
  
  @media (max-width: 1100px) {
    top: 0;
    justify-self: center;
  }
`;

const CareerList = styled.p`
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 1100px) {
    margin: 0;
  }
  
  @media (max-width: 700px) {
    margin-bottom: 10px;
  }
`;

const Career: React.FC = () => {
  return (
    <CommonPage pageTitle={PageTitle.Career}>
      <>
        <CareerPageLogo src={ImagePath.careerLogo} alt="career logo"/>
        <CareerSkillBox>
          {myCareer.map(career => (
            <CareerBox key={career}>
                <Dot />
                <CareerList>{career}</CareerList>
            </CareerBox>
          ))}
        </CareerSkillBox>
      </>
    </CommonPage>
  );
}

export default Career;