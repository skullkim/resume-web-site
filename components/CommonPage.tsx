import React from "react";
import styled from 'styled-components';

import {myName} from "../lib/datatPath";
import {PageProps} from "../lib/dataType";

const PageBox = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid black;
  
  @media (max-width: 1100px) {
    height: 140vh;
  }
  
  @media (max-width: 400px) {
    height: 160vh;
  }
`;

const PageTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
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
  
  @media (max-width: 1100px) {
    font-size: 2em;
  }
  
  @media (max-width: 800px) {
    font-size: 1.5em;
  }
  
  @media (max-width: 600px) {
    font-size: 1em;
  }
  
  @media (max-width: 400px) {
    font-size: 0.5em;
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
  text-align: center;
  
  @media (max-width: 800px) {
    font-size: 1em;
  }
  
  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;

const ContextBox = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-around;
  
  @media (max-width: 1100px) {
    height: 40vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 40px;
  }
  
`;

const CommonPage: React.FC<PageProps> = ({pageTitle, children}) => {
  return (
    <PageBox>
      <PageTitleBox>
        <PageTitle>{pageTitle}</PageTitle>
        <NickNameBox>{myName}</NickNameBox>
      </PageTitleBox>
      <ContextBox>{children}</ContextBox>
    </PageBox>
  );
}

export default CommonPage;
