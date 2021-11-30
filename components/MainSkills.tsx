import styled, {css} from 'styled-components';
import React from 'react';

import CommonPage from "./CommonPage";
import {ImagePath, PageTitle} from "../lib/datatPath";

const CommonBoxStyle = css`
  position: relative;
  top: 9vh;
`;

const MainSkillsLogo = styled.img`
  height: 42vh;
  position: relative;
  right: 5vw;
  ${CommonBoxStyle}
`;

const MainSkillsBox = styled.div`
  width: 60vh;
  height: 43vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${CommonBoxStyle}
`;

const SkillRowBox = styled.div`
  width: 21.5vw;
  display: flex;
  justify-content: space-between;
  position: relative;
  left: 2vw;
`;

const SkillLogo = styled.img`
  width: 5vw;
`;


const MainSkills: React.FC = () => {
  return (
    <CommonPage pageTitle={PageTitle.MainSkills}>
      <>
        <MainSkillsLogo src={ImagePath.mainSkillsLogo} alt="main skills logo"/>
        <MainSkillsBox>
          <SkillRowBox>
            <SkillLogo src={ImagePath.expressSvg} alt='express logo'/>
            <SkillLogo src={ImagePath.reactSvg} alt='react logo'/>
          </SkillRowBox>
          <SkillRowBox>
            <SkillLogo src={ImagePath.awsSvg} alt='aws logo'/>
            <SkillLogo src={ImagePath.mysqlSvg} alt='mysql logo'/>
          </SkillRowBox>
          <SkillRowBox>
            <SkillLogo src={ImagePath.typescriptSvg} alt='typescript logo'/>
            <SkillLogo src={ImagePath.nodeSvg} alt='nodejs logo'/>
          </SkillRowBox>
        </MainSkillsBox>
      </>
    </CommonPage>
  );
}

export default MainSkills;