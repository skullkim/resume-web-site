import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import React from 'react';
import ContactMe from "../components/ContactMe";

test('contact me page', () => {
  render(<ContactMe/>);

  const contactMeLogo = screen.getByAltText('contact me logo');
  const dotes = screen.getAllByAltText('dot');
  const phoneNumber = screen.getByText('Phone Number: 010-3687-1878');
  const email = screen.getByText('Email: kyk990328@gmail.com');
  const kakaoId = screen.getByText('Kakao ID: kkood');

  expect(contactMeLogo)
    .toHaveAttribute('src', "/images/contactMe/contactMe.svg");
  dotes.forEach(dot => expect(dot)
    .toHaveAttribute('src', '/images/dot.svg'));
  expect(phoneNumber).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(kakaoId).toBeInTheDocument();
});