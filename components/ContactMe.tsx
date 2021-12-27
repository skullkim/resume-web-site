import styled from 'styled-components';
import React from 'react';

import CommonPage from "./CommonPage";
import {Contact, ImagePath, PageTitle} from "../lib/datatPath";
import {Dot, PageLogo, SkillRowBox, SkillsBox} from "./style/commonStyled";

const ContactLogo = styled(PageLogo)`
  height: 60vh;
  top: 4vh;
  right: 6vw;
`;

const ContactWay = styled(SkillRowBox)`
  justify-content: flex-start;
  width: 40vw;
`;

const ContactBox = styled(SkillsBox)`
  height: 23vh;
  top: 20vh;
  right: 10vw;
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