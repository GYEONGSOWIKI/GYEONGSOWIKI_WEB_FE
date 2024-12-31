import styled from "styled-components";

export const TopCont = styled.main`
  width: 100%;
  min-height: 100svh;
  background-color: #f5f5f5;
  padding-top: 52px;
  display: flex;
  flex-direction: unset;
  justify-content: unset;
  align-items: unset;
`;

export const ContentArea = styled.main`
  width: 73%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-left: 2px solid #ccc;
  border-right: 2px solid #ccc;
  background-color: #fff;
  margin: 0 20px 0 40px;
`;

export const MainWrap = styled.figure`
  width: 100%;
  height: fit-content;
  padding: 30px;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: unset;
`;

export const Board = styled.div`
  width: 100%;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: unset;
`;

export const HomeDescWrap = styled.main`
  padding: 20px 0;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: unset;
`;

export const HomeDescTextWrap = styled.main`
  width: 100%;
  padding: 20px 0;
  gap: 36px;
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: unset;
`;

export const IntroSect = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    color: #545454;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 140%;
    letter-spacing: 0.25px;
  }

  & > h2 {
    color: #545454;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 140%;
    letter-spacing: 0.15px;
  }

  & > h1 > span,
  & > h2 > span {
    color: #00aa87;
  }
`;

export const HomeDescContents = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    color: #545454;
    text-align: center;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    letter-spacing: -0.15px;
  }

  & > div > span {
    color: red;
    font-weight: 600;
  }
`;

export const HomeTableWrap = styled.main`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TableSect = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: unset;

  & > img {
    width: 100%;
    border: 2px solid #ccc;
    border-top: none;
    height: auto;
  }
`;

export const TableTitleWrap = styled.hgroup`
  width: 100%;
  padding: 14px 0;
  border: 2px solid #ccc;
  color: #fff;
  background-color: #00aa87;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 140%;
    letter-spacing: 0.15px;
  }

  & > p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    letter-spacing: -0.15px;
  }
`;

export const SummaryWrap = styled.div`
  .articleContent > a {
    color: #00aa87;

    &:hover {
      border-bottom: 1px solid #00aa87;
    }
  }

  .articleContent {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 140%;
    letter-spacing: 0.15px;
    white-space: pre-wrap;
  }

  .highlightWrap {
    border: 1px solid #ccc;
    background-color: #39b49c;
    color: #fff;
    padding: 10px;
    display: inline-block;
    max-width: 100%;
  }

  .highlightWrap > div {
    font-size: 1rem;
  }

  .deleteContent {
    text-decoration: line-through;
    color: gray;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const HomeFooter = styled.footer`
  width: 96%;
  border-top: 2px solid #ccc;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: flex-end;
  text-align: right;

  & > img {
    width: 130px;
    height: 44px;
    aspect-ratio: auto;
  }

  & > p {
    font-weight: 600;
    font-size: 1rem;
    line-height: 140%;
    letter-spacing: 0.15px;
    padding: 10px 0;
  }
`;
