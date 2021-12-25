import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import React from 'react';

import Repositories from "../components/Repositories";


test('repositories page', () => {
  render(<Repositories />);

  const repositoryLogo = screen.getByAltText('repository logo');
  const dotes = screen.getAllByAltText('dot');
  const learningCodeProject =
    screen.getByText('Learning code refactoring production: 코딩 커뮤니티');
  const learningCodeSkills =
    screen.getByText('(JS, React, Express, Sequelize, Mysql, Docker, Nginx, HTTPS, AWS(S3))');
  const metroMapProject =
    screen.getByText('metro map production: 지하철 노선도 서비스');
  const metroMapSkills =
    screen.getByText('(Express(TS), React(JS), Mysql, Typeorm, Docker, Nginx, HTTPS, JWT)');
  const ItubeProject =
    screen.getByText('Itube simple clone of youtube: 유투브 클론코딩');
  const ItubeSkills =
    screen.getByText('(JS, Express, Nunjucks, Jquery, Sequelize, Mysql, AWS(EC2, RDS, S3))');
  const algorithm =
    screen.getByText('Algorithm: 백준 알고리즘 문제 풀이');
  const algorithmSkills = screen.getByText('(C++)');

  expect(repositoryLogo)
    .toHaveAttribute('src', '/images/repositories/repository.svg');
  dotes.forEach(dot => {
    expect(dot).toHaveAttribute('src', '/images/dot.svg');
  });

  expect(learningCodeProject).toBeInTheDocument();
  expect(learningCodeProject).toHaveAttribute('href',
    'https://github.com/skullkim/learning-code-reafactoring-production');
  expect(learningCodeSkills).toBeInTheDocument();

  expect(metroMapProject).toBeInTheDocument();
  expect(metroMapProject).toHaveAttribute('href',
    'https://github.com/skullkim/metro-map-production');
  expect(metroMapSkills).toBeInTheDocument();

  expect(ItubeProject).toBeInTheDocument();
  expect(ItubeProject).toHaveAttribute('href',
    'https://github.com/skullkim/Itube-simple-clone-of-youtube');
  expect(ItubeSkills).toBeInTheDocument();

  expect(algorithm).toBeInTheDocument();
  expect(algorithm).toHaveAttribute('href',
    'https://github.com/skullkim/algorithm');
  expect(algorithmSkills).toBeInTheDocument();
})