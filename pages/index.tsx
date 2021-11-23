import type { NextPage } from 'next'
import React from 'react';

import CommonPage from "../components/CommonPage";
import FirstPage from "../components/FirstPage";

const Home: NextPage = () => {
  return (
    <>
      <FirstPage />
      <CommonPage />
    </>
  );
}

export default Home;
