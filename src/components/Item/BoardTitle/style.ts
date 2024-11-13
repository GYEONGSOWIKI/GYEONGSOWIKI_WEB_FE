import styled from "styled-components";

export const TitleWrap = styled.hgroup`
  gap: 4px;
  display: flex;
  flex-direction: unset;
  justify-content: space-between;
  align-items: center;

  & > div {
    gap: 4px;
    display: flex;
    flex-direction: column;
    justify-content: unset;
    align-items: unset;
  }

  & > div > h1 {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 140%;
    letter-spacing: 0.25px;
    color: #00aa87;
  }

  & > div > h1 > span {
    box-shadow: inset 0 -0.5rem 0 rgba(0, 170, 135, 0.3);
    --espejo-article-title-namespace-underline-color: inset 0 -0.5rem 0 rgba(0, 170, 135, 0.3);
  }
`;
