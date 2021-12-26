import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import React from 'react';

import CommonPage from "../components/CommonPage";

test('common page', () => {
  render(<CommonPage pageTitle="title"><></></CommonPage>);

  const pageTitle = screen.getByText('title');
  const nickName = screen.getByText(`Yunki kim`);

  expect(pageTitle).toBeInTheDocument();
  expect(nickName).toBeInTheDocument();
})
