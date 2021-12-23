import type { NextPage } from 'next'
import React from 'react';

import FirstPage from "../components/FirstPage";
import AboutMe from "../components/AboutMe";
import MainSkills from "../components/MainSkills";
import OtherSkills from "../components/OtherSkills";

const Home: NextPage = () => {
  return (
    <>
      <FirstPage />
      <AboutMe />
      <MainSkills />
      <OtherSkills />
    </>
  );
}

export default Home;
