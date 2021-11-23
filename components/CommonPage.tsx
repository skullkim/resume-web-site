import React from "react";
import styled from 'styled-components';

import {myNickName} from "../lib/datatPath";

const PageBox = styled.section`
  height: 100%;
  width: 100%;
`;

const PageTitleBox = styled.div`
  height: 80px;
  width: 399px;
  background-color: #323232;
`;

function CommonPage () {
  return (
    <PageBox>
      <PageTitleBox>ABOUT ME</PageTitleBox>
      <div>{myNickName}</div>
    </PageBox>
  );
}

export default CommonPage;
