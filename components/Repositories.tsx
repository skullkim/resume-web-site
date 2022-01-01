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
  
  @media (max-width: 1100px) {
    top: -12vh;
    width: 35vw;
    z-index: 1;
  }
  
  @media (max-width: 800px) {
    width: 45vw;
  }
  
`;

const RepositoryBox = styled.div`
  display: flex;
  align-items: flex-start;
  width: 50vw;
  
`;

const RepositoriesBox = styled(SkillsBox)`
  right: 2.8vw;
  z-index: 2;
  
  @media (max-width: 1100px) {
    top: -120px;
    width: 70vw;
    height: 50vh;
    padding: 10px;
    border: 1px solid black;
    flex-direction: row;
    align-items: flex-start;
    overflow-y: scroll;
  }

  @media (max-width: 450px) {
    position: relative;
    top: -20vh;
  }
`;

const RepositoryLink = styled.a`
  font-size: 1.3em;
  font-weight: bold;
  
  @media (max-width: 1100px) {
    font-size: 1.1em;
  }
  
  @media (max-width: 720px) {
    font-size: 0.9em;
  }
`;

const UsedSkills = styled.p`
  font-size: 1.3em;
  font-weight: bold;
  margin-top: 0;

  @media (max-width: 1100px) {
    font-size: 1.1em;
  }
  
  @media (max-width: 720px) {
    font-size: 0.9em;
  }
`;

const Repositories: React.FC = () => {
  return (
    <CommonPage pageTitle={PageTitle.Repositories}>
      <>
        <RepositoryLogo src={ImagePath.repositoryLogo} alt='repository logo'/>
        <RepositoriesBox>
          {repository.map(({name, skills, url}) => (
            <RepositoryBox key={url}>
              <Dot />
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
