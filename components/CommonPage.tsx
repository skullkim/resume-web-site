import React from "react";
import styled from 'styled-components';

import {myNickName} from "../lib/datatPath";
import {PageProps} from "../lib/dataType";

const PageBox = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid black;
`;

const PageTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  height: 11vh;
  width: 31vw;
  background-color: #323232;
  color: white;
  margin: 0;
  font-size: 2.5em;
  text-align: center;
  line-height: 9vh;
  
  @media (max-width: 650px) {
    font-size: 20px;
  }
  
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

const NickNameBox = styled.div`
  height: 5.5vh;
  width: 13.7vw;
  background-color: #A4A4A4;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -2vh;
  font-size: 1.3em;
  
  @media (max-width: 650px) {
    font-size: 11px;
  }

  @media (max-width: 400px) {
    font-size: 7px;
  }
`;

const ContextBox = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-around;
`;

const CommonPage: React.FC<PageProps> = ({pageTitle, children}) => {
  return (
    <PageBox>
      <PageTitleBox>
        <PageTitle>{pageTitle}</PageTitle>
        <NickNameBox>{myNickName}</NickNameBox>
      </PageTitleBox>
      <ContextBox>{children}</ContextBox>
    </PageBox>
  );
}

export default CommonPage;
