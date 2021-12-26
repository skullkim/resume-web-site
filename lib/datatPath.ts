enum ImageCommonPath {
  firstPage = '/images/firstPage',
  aboutMe = '/images/aboutMe',
  mainPage = '/images/mainSkills',
  otherSkills = '/images/otherSkills',
  career = '/images/career',
  repositories = '/images/repositories',
  contact = '/images/contactMe',
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
  javaScript: `${ImageCommonPath.otherSkills}/experiencedSkills/javascript.svg`,
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
  // career page
  careerLogo: `${ImageCommonPath.career}/career.svg`,
  dot: `/images/dot.svg`,
  // repositories page
  repositoryLogo: `${ImageCommonPath.repositories}/repository.svg`,
  // contact me page
  contactLogo: `${ImageCommonPath.contact}/contactMe.svg`,
}
Object.freeze(ImagePath);

export enum PageTitle {
  AboutMe = 'ABOUT ME',
  MainSkills = 'MAIN SKILLS',
  OtherSkills = 'OTHER SKILLS',
  Career = 'CAREER',
  Repositories = 'REPOSITORIES',
  ContactMe = 'CONTACT ME',
}

export const myName = 'Yunki kim';

/* about me page */

export enum Url {
  github = 'https://github.com/skullkim',
  blog = 'https://iskull-dev.tistory.com/',
}

export const AboutMeData = {
  favoriteSentence: 'Do What You Love',
  introduction: [
    `Backend 개발자가 되기 위해 끊임없이 공부하고 있는 컴퓨터공학과 학생입니다. 더 많은 성장을 위해 끊임없이 개인 프로젝트를 진행하고 있으며 개인 블로그에 배운 내용을 정리하고 이해하며 공부하고 있습니다.`,
    `앞으로 더 많은 좋은 기회를 잡고 싶고 그를 통해 더 좋은 개발자가 되고 싶습니다.`,
    `프로그래밍을 배우면서 저의 한계에 도전해 저의 실력을 키우는 것이 저의 삶에 있어서 가장 큰 즐거움입니다. 프로그래밍을 통해 단순히 기능만을 구현하는 것이 아니라 그의 작동 원리를 이해하는 것 역시 좋아합니다.`,
    `꾸준히 공부하며 유망한 백엔드 개발자가 되는 것이 저의 목표입니다.`,
  ],
  gitHubUrlSentence: `깃허브: ${Url.github}`,
  blogUrlSentence: `블로그: ${Url.blog}`,
}
Object.freeze(AboutMeData);

/* career page */
export const myCareer = [
  '2018.03 ~ : MyongJi University Dept.Computer Engineering',
  '2019.01 ~ 2020.11: AirForce',
  '2021.03 ~ 2021.12: MyongJi University Like Lion 9th GEN',
  '2018 명지대학교 코딩경진대회 우수상',
  '2021 ICPC 본선(64th)',
  'TOEIC Speaking 6/140',
];

/* repositories page */
export enum Repository {
  learningCode = 'Learning code refactoring production: 코딩 커뮤니티',
  learningCodeSkills = '(JS, React, Express, Sequelize, Mysql, Docker, Nginx, HTTPS, AWS(S3))',
  learningCodeUrl = 'https://github.com/skullkim/learning-code-reafactoring-production',

  metroMap = 'metro map production: 지하철 노선도 서비스',
  metroMapSkills = '(Express(TS), React(JS), Mysql, Typeorm, Docker, Nginx, HTTPS, JWT)',
  metroMapUrl = 'https://github.com/skullkim/metro-map-production',

  Itube = 'Itube simple clone of youtube: 유투브 클론코딩',
  ItubeSkills = '(JS, Express, Nunjucks, Jquery, Sequelize, Mysql, AWS(EC2, RDS, S3))',
  ItubeUrl = 'https://github.com/skullkim/Itube-simple-clone-of-youtube',

  algorithm = 'Algorithm: 백준 알고리즘 문제 풀이',
  algorithmSkills = '(C++)',
  algorithmUrl = 'https://github.com/skullkim/algorithm',
}

/* contact me page */
export enum Contact {
  phoneNumber = 'Phone Number: 010-3687-1878',
  email = 'Email: kyk990328@gmail.com',
  kakaoId = 'Kakao ID: kkood',
}