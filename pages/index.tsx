import type { NextPage } from 'next'
import React from 'react';

import FirstPage from "../components/FirstPage";
import AboutMe from "../components/AboutMe";
import MainSkills from "../components/MainSkills";
import OtherSkills from "../components/OtherSkills";
import Career from "../components/Career";

const Home: NextPage = () => {
  return (
    <>
      <FirstPage />
      <AboutMe />
      <MainSkills />
      <OtherSkills />
      <Career />
    </>
  );
}

export default Home;
