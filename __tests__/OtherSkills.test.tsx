import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import React from 'react';

import OtherSkills from "../components/OtherSkills";

test('other skills page', () => {
  render(<OtherSkills />);

  const otherSkillsLogo = screen.getByAltText('other skills logo');

  const currentLearning = screen.getByText('Current Learning');
  const docker = screen.getByAltText('docker logo');
  const nginx = screen.getByAltText('nginx logo');

  const experiencedSkills = screen.getByText('Experienced Skills');
  const js = screen.getByAltText('js logo');
  const jquery = screen.getByAltText('jquery logo');
  const nunjucks = screen.getByAltText('nunjucks logo');
  const java = screen.getByAltText('java logo');
  const cplusplus = screen.getByAltText('cplusplus logo');
  const c = screen.getByAltText('c logo');

  const favoriteTools = screen.getByText('FavoriteTools');
  const github = screen.getByAltText('github logo');
  const slack = screen.getByAltText('slack logo');
  const notion = screen.getByAltText('notion logo');
  const vim = screen.getByAltText('vim logo');
  const webstorm = screen.getByAltText('webstorm logo');
  const datagrip = screen.getByAltText('datagrip logo');
  const intellij = screen.getByAltText('intellij logo');

  expect(otherSkillsLogo)
    .toHaveAttribute('src', "/images/otherSkills/otherSkills.png");

  expect(currentLearning).toBeInTheDocument();
  expect(docker)
    .toHaveAttribute('src', '/images/otherSkills/currentLearning/docker.svg');
  expect(nginx)
    .toHaveAttribute('src', '/images/otherSkills/currentLearning/nginx.svg');

  expect(experiencedSkills).toBeInTheDocument();
  expect(js)
    .toHaveAttribute('src', '/images/otherSkills/experiencedSkills/javascript.svg');
  expect(jquery)
    .toHaveAttribute('src', '/images/otherSkills/experiencedSkills/jquery.svg');
  expect(nunjucks)
    .toHaveAttribute('src', '/images/otherSkills/experiencedSkills/nunjucks.svg');
  expect(java)
    .toHaveAttribute('src', '/images/otherSkills/experiencedSkills/java.svg');
  expect(cplusplus)
    .toHaveAttribute('src', '/images/otherSkills/experiencedSkills/cplusplus.svg');
  expect(c)
    .toHaveAttribute('src', '/images/otherSkills/experiencedSkills/c.svg');

  expect(favoriteTools).toBeInTheDocument();
  expect(github)
    .toHaveAttribute('src', '/images/otherSkills/favoriteTools/github.svg');
  expect(slack)
    .toHaveAttribute('src', '/images/otherSkills/favoriteTools/slack.svg');
  expect(notion)
    .toHaveAttribute('src', '/images/otherSkills/favoriteTools/notion.svg');
  expect(vim)
    .toHaveAttribute('src', '/images/otherSkills/favoriteTools/vim.svg');
  expect(webstorm)
    .toHaveAttribute('src', '/images/otherSkills/favoriteTools/webstorm.svg');
  expect(datagrip)
    .toHaveAttribute('src', '/images/otherSkills/favoriteTools/datagrip.svg');
  expect(intellij)
    .toHaveAttribute('src', '/images/otherSkills/favoriteTools/intellij.svg');

})