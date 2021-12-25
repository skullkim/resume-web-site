import styled from 'styled-components';
import React from 'react';

import CommonPage from "./CommonPage";
import {ImagePath, PageTitle, Repository} from "../lib/datatPath";
import {Dot, PageLogo, SkillsBox} from "./style/commonStyled";

const RepositoryLogo = styled(PageLogo)`
  height: 63vh;
  position: relative;
  top: 0.7vh;
  right: 8vw;
`;

const RepositoryBox = styled.div`
  display: flex;
  align-items: flex-start;
  width: 50vw;
`;

const RepositoriesBox = styled(SkillsBox)`
  right: 10vw;
`;

const RepositoryLink = styled.a`
  font-size: 20px;
  font-weight: bold;
`;

const UsedSkills = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 0;
`;

const Repositories: React.FC = () => {
  return (
    <CommonPage pageTitle={PageTitle.Repositories}>
      <>
        <RepositoryLogo src={ImagePath.repositoryLogo} alt='repository logo'/>
        <RepositoriesBox>
          <RepositoryBox>
            <Dot src={ImagePath.dot} alt="dot"/>
            <div>
              <RepositoryLink href={Repository.learningCodeUrl}>
                {Repository.learningCode}
              </RepositoryLink>
              <UsedSkills>{Repository.learningCodeSkills}</UsedSkills>
            </div>
          </RepositoryBox>
          <RepositoryBox>
            <Dot src={ImagePath.dot} alt="dot"/>
            <div>
              <RepositoryLink href={Repository.metroMapUrl}>
                {Repository.metroMap}
              </RepositoryLink>
              <UsedSkills>{Repository.metroMapSkills}</UsedSkills>
            </div>
          </RepositoryBox>
          <RepositoryBox>
            <Dot src={ImagePath.dot} alt="dot"/>
            <div>
              <RepositoryLink href={Repository.ItubeUrl}>
                {Repository.Itube}
              </RepositoryLink>
              <UsedSkills>{Repository.ItubeSkills}</UsedSkills>
            </div>
          </RepositoryBox>
          <RepositoryBox>
            <Dot src={ImagePath.dot} alt="dot"/>
            <div>
              <RepositoryLink href={Repository.algorithmUrl}>
                {Repository.algorithm}
              </RepositoryLink>
              <UsedSkills>{Repository.algorithmSkills}</UsedSkills>
            </div>
          </RepositoryBox>
        </RepositoriesBox>
      </>
    </CommonPage>
  );
}

export default Repositories;
