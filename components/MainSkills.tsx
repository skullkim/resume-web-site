import React from 'react';

import CommonPage from "./CommonPage";
import {ImagePath, PageTitle} from "../lib/datatPath";
import {PageLogo, SkillLogo, SkillRowBox, SkillsBox} from "./style/commonStyled";


const MainSkills: React.FC = () => {
  return (
    <CommonPage pageTitle={PageTitle.MainSkills}>
      <>
        <PageLogo src={ImagePath.mainSkillsLogo} alt="main skills logo"/>
        <SkillsBox>
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
        </SkillsBox>
      </>
    </CommonPage>
  );
}

export default MainSkills;