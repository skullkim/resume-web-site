import styled, {css} from "styled-components";

const CommonBoxStyle = css`
  position: relative;
  top: 9vh;
`;

export const PageLogo = styled.img`
  height: 42vh;
  position: relative;
  right: 5vw;
  ${CommonBoxStyle}
`;

export const SkillsBox = styled.div`
  width: 60vh;
  height: 43vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${CommonBoxStyle}
`;

export const SkillRowBox = styled.div`
  width: 21.5vw;
  display: flex;
  justify-content: space-between;
  position: relative;
  left: 2vw;
`;

export const SkillLogo = styled.img`
  width: 5vw;
`;
