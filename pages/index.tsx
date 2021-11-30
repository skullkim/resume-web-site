import type { NextPage } from 'next'
import React from 'react';

import FirstPage from "../components/FirstPage";
import AboutMe from "../components/AboutMe";

const Home: NextPage = () => {
  return (
    <>
      <FirstPage />
      <AboutMe />
    </>
  );
}

export default Home;
