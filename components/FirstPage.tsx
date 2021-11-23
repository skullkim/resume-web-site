import React from 'react';
import styled from 'styled-components';
import {ImagePath} from "../lib/datatPath";

const FirstPageImage = styled.img`
  position: absolute;
  width: 100%;
`;

function FirstPage () {
  return (
    <>
      <FirstPageImage src={ImagePath.FirstPageImage} alt='first page image'/>
    </>

  );
}

export default FirstPage;
