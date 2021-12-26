import styled from 'styled-components';
import React from 'react';

import CommonPage from "./CommonPage";
import {Dot, PageLogo, SkillsBox} from "./style/commonStyled";
import {ImagePath, PageTitle, myCareer} from "../lib/datatPath";

const CareerBox = styled.div`
  display: flex;
  width: 55vw;
`;

const CareerPageLogo = styled(PageLogo)`
  height: 58vh;
  right: 8vw;
  top: 5vh;
`;

const CareerSkillBox = styled(SkillsBox)`
  right: 9vw;
  top: 10vh;
`;

const CareerList = styled.p`
  font-size: 20px;
`;

const Career: React.FC = () => {
  return (
    <CommonPage pageTitle={PageTitle.Career}>
      <>
        <CareerPageLogo src={ImagePath.careerLogo} alt="career logo"/>
        <CareerSkillBox>
          {myCareer.map(career => (
            <CareerBox key={career}>
                <Dot src={ImagePath.dot} alt="dot"/>
                <CareerList>{career}</CareerList>
            </CareerBox>
          ))}
        </CareerSkillBox>
      </>
    </CommonPage>
  );
}

export default Career;