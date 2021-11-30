import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import React from 'react';

import MainSkills from "../components/MainSkills";
import {ImagePath} from "../lib/datatPath";

test('main skills page', () => {
  render(<MainSkills />);

  const mainSkillsLogo = screen.getByAltText('main skills logo');
  const expressSvg = screen.getByAltText('express logo');
  const reactSvg = screen.getByAltText('react logo');
  const awsSvg = screen.getByAltText('aws logo');
  const mysqlSvg = screen.getByAltText('mysql logo');
  const typescriptSvg = screen.getByAltText('typescript logo');
  const nodeSvg = screen.getByAltText('nodejs logo');

  expect(mainSkillsLogo).toHaveAttribute('alt', 'main skills logo');
  expect(mainSkillsLogo).toHaveAttribute('src', `${ImagePath.mainSkillsLogo}`);
  expect(expressSvg).toHaveAttribute('alt', 'express logo');
  expect(expressSvg).toHaveAttribute('src', `${ImagePath.expressSvg}`);
  expect(reactSvg).toHaveAttribute('alt', 'react logo');
  expect(reactSvg).toHaveAttribute('src', `${ImagePath.reactSvg}`);
  expect(awsSvg).toHaveAttribute('alt', 'aws logo');
  expect(awsSvg).toHaveAttribute('src', `${ImagePath.awsSvg}`);
  expect(mysqlSvg).toHaveAttribute('alt', 'mysql logo');
  expect(mysqlSvg).toHaveAttribute('src', `${ImagePath.mysqlSvg}`);
  expect(typescriptSvg).toHaveAttribute('alt', 'typescript logo');
  expect(typescriptSvg).toHaveAttribute('src', `${ImagePath.typescriptSvg}`);
  expect(nodeSvg).toHaveAttribute('alt', 'nodejs logo');
  expect(nodeSvg).toHaveAttribute('src', `${ImagePath.typescriptSvg}`);
})