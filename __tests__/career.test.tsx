import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import React from 'react';

import Career from "../components/Career";

test('career page', () => {
  render(<Career/>);

  const careerLogo = screen.getByAltText('career logo');
  const dot = screen.getAllByAltText('dot');
  const university = screen
    .getByText('2018.03 ~ : MyongJi University Dept.Computer Engineering');
  const airForce = screen.getByText('2019.01 ~ 2020.11: AirForce');
  const likeLion = screen
    .getByText('2021.03 ~ 2021.12: MyongJi University Like Lion 9th GEN');
  const myongJiCodingCompetition = screen.getByText('2018 명지대학교 코딩경진대회 우수상');
  const ICPCAlgorithmCompetition = screen.getByText('2021 ICPC 본선(64th)');
  const TOEICSpeaking = screen.getByText('TOEIC Speaking 6/140');

  expect(careerLogo).toHaveAttribute('src', "/images/career/career.svg");
  dot.forEach(d => expect(d)
    .toHaveAttribute('src', "/images/dot.svg"));
  expect(university).toBeInTheDocument();
  expect(airForce).toBeInTheDocument();
  expect(likeLion).toBeInTheDocument();
  expect(myongJiCodingCompetition).toBeInTheDocument();
  expect(ICPCAlgorithmCompetition).toBeInTheDocument();
  expect(TOEICSpeaking).toBeInTheDocument();
})