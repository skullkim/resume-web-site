import styled from 'styled-components';
import React from 'react';

import CommonPage from "./CommonPage";
import {ImagePath, PageTitle, repository} from "../lib/datatPath";
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
          {repository.map(({name, skills, url}) => (
            <RepositoryBox key={url}>
              <Dot src={ImagePath.dot} alt="dot"/>
              <div>
                <RepositoryLink href={url}>
                  {name}
                </RepositoryLink>
                <UsedSkills>{skills}</UsedSkills>
              </div>
            </RepositoryBox>
          ))}
        </RepositoriesBox>
      </>
    </CommonPage>
  );
}

export default Repositories;
