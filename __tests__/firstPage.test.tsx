import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import React from "react";
import FirstPage from "../components/FirstPage";

import {ImagePath} from "../lib/datatPath";


test('first page', () => {
  render(<FirstPage/>);

  const firstPageImage = screen.getByAltText('first page image');

  expect(firstPageImage).toBeInTheDocument();
  expect(firstPageImage).toHaveAttribute('alt', 'first page image');
  expect(firstPageImage).toHaveAttribute('src', `${ImagePath.FirstPageImage}`);
})

export {};