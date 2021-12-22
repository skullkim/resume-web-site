enum ImageCommonPath {
  firstPage = '/images/firstPage',
  aboutMe = '/images/aboutMe',
  mainPage = '/images/mainSkills',
  otherSkills = '/images/otherSkills',
}

export const ImagePath = {
  // first page
  FirstPageImage: `${ImageCommonPath.firstPage}/firstPage.png`,
  // about me page
  myImage: `${ImageCommonPath.aboutMe}/me.jpg`,
  blogSvg: `${ImageCommonPath.aboutMe}/blog.svg`,
  githubSvg: `${ImageCommonPath.aboutMe}/github.svg`,
  toolsSvg: `${ImageCommonPath.aboutMe}/tools.svg`,
  laptopSvg: `${ImageCommonPath.aboutMe}/laptop.svg`,
  // main skills page
  awsSvg: `${ImageCommonPath.mainPage}/amazonaws.svg`,
  expressSvg: `${ImageCommonPath.mainPage}/express.svg`,
  mainSkillsLogo: `${ImageCommonPath.mainPage}/mainSkills.png`,
  mysqlSvg: `${ImageCommonPath.mainPage}/mysql.svg`,
  nodeSvg: `${ImageCommonPath.mainPage}/nodedotjs.svg`,
  reactSvg: `${ImageCommonPath.mainPage}/react.svg`,
  typescriptSvg: `${ImageCommonPath.mainPage}/typescript.svg`,
  // other skills page
  otherSkillsLogo: `${ImageCommonPath.otherSkills}/otherSkills.png`,
  docker: `${ImageCommonPath.otherSkills}/currentLearning/docker.svg`,
  nginx: `${ImageCommonPath.otherSkills}/currentLearning/nginx.svg`,
  c: `${ImageCommonPath.otherSkills}/experiencedSkills/c.svg`,
  cplusplus: `${ImageCommonPath.otherSkills}/experiencedSkills/cplusplus.svg`,
  java: `${ImageCommonPath.otherSkills}/experiencedSkills/java.svg`,
  jquery: `${ImageCommonPath.otherSkills}/experiencedSkills/jquery.svg`,
  nunjucks: `${ImageCommonPath.otherSkills}/experiencedSkills/nunjucks.svg`,
  datagrip: `${ImageCommonPath.otherSkills}/favoriteTools/datagrip.svg`,
  github: `${ImageCommonPath.otherSkills}/favoriteTools/github.svg`,
  intellij: `${ImageCommonPath.otherSkills}/favoriteTools/intellij.svg`,
  notion: `${ImageCommonPath.otherSkills}/favoriteTools/notion.svg`,
  slack: `${ImageCommonPath.otherSkills}/favoriteTools/slack.svg`,
  vim: `${ImageCommonPath.otherSkills}/favoriteTools/vim.svg`,
  webstorm: `${ImageCommonPath.otherSkills}/favoriteTools/webstorm.svg`,
}
Object.freeze(ImagePath);

export enum PageTitle {
  AboutMe = 'ABOUT ME',
  MainSkills = 'MAIN SKILLS',
}

/* about me page */
export const myNickName = 'skullKim';

export const aboutMeFavoriteSentence = 'Do What You Love'

export const aboutMeIntro1 = `Backend 개발자가 되기 위해 끊임없이 공부하고 있는 컴퓨터공학과 학생입니다. 더 많은 성장을 위해 끊임없이 개인 프로젝트를 진행하고 있으며 개인 블로그에 배운 내용을 정리하고 이해하며 공부하고 있습니다.`;

export const aboutMeIntro2 = `앞으로 더 많은 좋은 기회를 잡고 싶고 그를 통해 더 좋은 개발자가 되고 싶습니다.`;

export const aboutMeIntro3 = `프로그래밍을 배우면서 저의 한계에 도전해 저의 실력을 키우는 것이 저의 삶에 있어서 가장 큰 즐거움입니다. 프로그래밍을 통해 단순히 기능만을 구현하는 것이 아니라 그의 작동 원리를 이해하는 것 역시 좋아합니다.`;

export const aboutMeIntro4 = `꾸준히 공부하며 유망한 백엔드 개발자가 되는 것이 저의 목표입니다.`;

export const gitHubUrl = 'https://github.com/skullkim';

export const blogUrl = 'https://iskull-dev.tistory.com/';

export const gitHubUrlSentence = `깃허브: ${gitHubUrl}`;

export const blogUrlSentence = `블로그: ${blogUrl}`;
