import styled from 'styled-components';
import React from 'react';

import CommonPage from "./CommonPage";
import {Contact, ImagePath, PageTitle} from "../lib/datatPath";
import {Dot, PageLogo, SkillRowBox, SkillsBox} from "./style/commonStyled";

const ContactLogo = styled(PageLogo)`
  height: 60vh;
  top: 4vh;
  right: 6vw;
  
  @media (max-width: 1100px) {
    top: -10vh;
  }
  
  @media (max-width: 600px) {
    top: -15vh;
  }
`;

const ContactWay = styled(SkillRowBox)`
  justify-content: flex-start;
  width: 40vw;
  
  @media (max-width: 855px) {
    width: 60vw;
  }
`;

const ContactBox = styled(SkillsBox)`
  height: 23vh;
  top: 20vh;
  right: 10vw;
  
  @media (max-width: 1100px) {
    top: -20vh;
  }
  
  @media (max-width: 600px) {
    top: -30vh;
  }
  
  @media (max-width: 400px) {
    top: -40vh;
  }
`;

const ContactInformation = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const ContactMe: React.FC = () => {
  return (
    <CommonPage pageTitle={PageTitle.ContactMe}>
      <>
        <ContactLogo src={ImagePath.contactLogo} alt='contact me logo'/>
        <ContactBox>
          <ContactWay>
            <Dot />
            <ContactInformation>{Contact.phoneNumber}</ContactInformation>
          </ContactWay>
          <ContactWay>
            <Dot />
            <ContactInformation>{Contact.email}</ContactInformation>
          </ContactWay>
          <ContactWay>
            <Dot />
            <ContactInformation>{Contact.kakaoId}</ContactInformation>
          </ContactWay>
        </ContactBox>
      </>
    </CommonPage>
  );
}

export default ContactMe;