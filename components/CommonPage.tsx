import React from "react";
import styled from 'styled-components';

import {myNickName} from "../lib/datatPath";

const PageTitleBox = styled.div`
  height: 80px;
  width: 399px;
  background-color: #323232;
`;

function CommonPage () {
  return (
    <>
      <PageTitleBox>ABOUT ME</PageTitleBox>
      <div>{myNickName}</div>
    </>
  );
}

export default CommonPage;
