import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import React from 'react';

import AboutMe from "../components/AboutMe";

test('about me page', () => {
  render(<AboutMe/>);

  const laptopSvg = screen.getByAltText('laptop image');
  const toolsSvg = screen.getByAltText('tools image');
  const gitHubSvg = screen.getByAltText('github logo');
  const blogSvg = screen.getByAltText('blog image');
  const myImage = screen.getByAltText('my image');
  const favoriteSentence = screen.getByText(`Do What You Love`);
  const introduction1 = screen
    .getByText(`Backend 개발자가 되기 위해 끊임없이 공부하고 있는 컴퓨터공학과 학생입니다. 더 많은 성장을 위해 끊임없이 개인 프로젝트를 진행하고 있으며 개인 블로그에 배운 내용을 정리하고 이해하며 공부하고 있습니다.`);
  const introduction2 = screen
    .getByText('앞으로 더 많은 좋은 기회를 잡고 싶고 그를 통해 더 좋은 개발자가 되고 싶습니다.');
  const introduction3 = screen
    .getByText('프로그래밍을 배우면서 저의 한계에 도전해 저의 실력을 키우는 것이 저의 삶에 있어서 가장 큰 즐거움입니다. 프로그래밍을 통해 단순히 기능만을 구현하는 것이 아니라 그의 작동 원리를 이해하는 것 역시 좋아합니다.');
  const introduction4 = screen
    .getByText(`꾸준히 공부하며 유망한 백엔드 개발자가 되는 것이 저의 목표입니다.`);
  const githubLink = screen.getByText('깃허브: https://github.com/skullkim');
  const blogLink = screen.getByText('블로그: https://iskull-dev.tistory.com/');

  expect(laptopSvg).toBeInTheDocument();
  expect(toolsSvg).toBeInTheDocument();
  expect(gitHubSvg).toBeInTheDocument();
  expect(blogSvg).toBeInTheDocument();
  expect(myImage).toBeInTheDocument();
  expect(favoriteSentence).toBeInTheDocument();
  expect(introduction1).toBeInTheDocument();
  expect(introduction2).toBeInTheDocument();
  expect(introduction3).toBeInTheDocument();
  expect(introduction4).toBeInTheDocument();
  expect(githubLink).toBeInTheDocument();
  expect(blogLink).toBeInTheDocument();
  expect(laptopSvg).toHaveAttribute('alt', 'laptop image');
  expect(laptopSvg).toHaveAttribute('src', '/images/aboutMe/laptop.svg');
  expect(toolsSvg).toHaveAttribute('alt', `tools image`);
  expect(toolsSvg).toHaveAttribute('src', `/images/aboutMe/tools.svg`);
  expect(gitHubSvg).toHaveAttribute('alt', 'github logo');
  expect(gitHubSvg).toHaveAttribute('src', `/images/aboutMe/github.svg`);
  expect(myImage).toHaveAttribute('alt', 'my image');
  expect(myImage).toHaveAttribute('src', '/images/aboutMe/me.jpg');
  expect(blogSvg).toHaveAttribute('alt', 'blog image');
  expect(blogSvg).toHaveAttribute('src', '/images/aboutMe/blog.svg');
})