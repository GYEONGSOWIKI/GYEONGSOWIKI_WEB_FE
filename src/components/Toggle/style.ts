import styled from "styled-components";

export const SectionWrap = styled.div`
  width: 100%;
`;

export const AccodianMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  margin: 20px 0;
  color: #27416894;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 140%;
  letter-spacing: 0;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  box-sizing: border-box;
  gap: 5px;
`;

export const ToggleSvg = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  fill: #818181;
`;

export const SummaryTitle = styled.h3`
  font-size: 1.75rem;

  &.titleOpen {
    color: #00aa87;
  }

  &.titleClosed {
    color: #27416894;
  }
`;

export const SummaryArticle = styled.article`
  max-height: 0;
  overflow: hidden;

  &.open {
    max-height: 1000px;
  }
`;

export const SummaryArticleContent = styled.div`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 140%;
  letter-spacing: 0.15px;
  white-space: pre-wrap;

  & > h2 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 140%;
    letter-spacing: 0.15px;
  }
`;
