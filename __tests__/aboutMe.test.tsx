import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import React from 'react';

import AboutMe from "../components/AboutMe";
import {
  aboutMeFavoriteSentence,
  aboutMeIntro1,
  aboutMeIntro2,
  aboutMeIntro3,
  aboutMeIntro4,
  blogUrl, blogUrlSentence,
  gitHubUrl, gitHubUrlSentence, ImagePath
} from "../lib/datatPath";

test('about me page', () => {
  render(<AboutMe/>);

  const laptopSvg = screen.getByAltText('laptop image');
  const toolsSvg = screen.getByAltText('tools image');
  const gitHubSvg = screen.getByAltText('github logo');
  const blogSvg = screen.getByAltText('blog image');
  const myImage = screen.getByAltText('my image');
  const favoriteSentence = screen.getByText(`${aboutMeFavoriteSentence}`);
  const introduction1 = screen.getByText(`${aboutMeIntro1}`);
  const introduction2 = screen.getByText(`${aboutMeIntro2}`);
  const introduction3 = screen.getByText(`${aboutMeIntro3}`);
  const introduction4 = screen.getByText(`${aboutMeIntro4}`);
  const githubLink = screen.getByText(`${gitHubUrlSentence}`);
  const blogLink = screen.getByText(`${blogUrlSentence}`);

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
  expect(laptopSvg).toHaveAttribute('src', `${ImagePath.laptopSvg}`);
  expect(toolsSvg).toHaveAttribute('alt', `tools image`);
  expect(toolsSvg).toHaveAttribute('src', `${ImagePath.toolsSvg}`);
  expect(gitHubSvg).toHaveAttribute('alt', 'github logo');
  expect(gitHubSvg).toHaveAttribute('src', `${ImagePath.githubSvg}`);
  expect(myImage).toHaveAttribute('alt', 'my image');
  expect(myImage).toHaveAttribute('src', `${ImagePath.myImage}`);
  expect(blogSvg).toHaveAttribute('alt', 'blog image');
  expect(blogSvg).toHaveAttribute('src', `${ImagePath.blogSvg}`);
})