import type { NextPage } from 'next'
import React from 'react';

import FirstPage from "../components/FirstPage";
import AboutMe from "../components/AboutMe";
import MainSkills from "../components/MainSkills";

const Home: NextPage = () => {
  return (
    <>
      <FirstPage />
      <AboutMe />
      <MainSkills />
    </>
  );
}

export default Home;
