import styled from "styled-components";

export const AsideWrap = styled.aside`
  height: 100%;
  position: sticky;
  top: 70px;
  width: 300px;
  gap: 12px;
  flex-direction: column;
  display: flex;
  justify-content: unset;
  align-items: unset;
`;

export const AsideInner = styled.aside`
  overflow: hidden;
  border-bottom: 2px solid #ccc;
  background-color: #fff;
  width: 300px;
  height: 90px;
  border-top: none;
  z-index: 100;
`;

export const HeaderInner = styled.header`
  background-color: #00aa87;
  border-left: none;
  border-right: none;
  width: 100%;
  height: 46px;
  padding: 0 20px;
  color: #fff;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 140%;
  letter-spacing: 0.15px;
  display: flex;
  flex-direction: unset;
  justify-content: unset;
  align-items: center;
`;

export const ListInner = styled.ul`
  overflow: hidden;
  border: 2px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: unset;
  list-style: none;
`;

export const MainWrap = styled.main`
  width: 300px;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: unset;
`;

export const ArticleWrap = styled.main`
  background: #fff;
  height: 100%;
  border: 2px solid #ccc;
  border-top: none;
`;

export const ArticleHeader = styled.article`
  background-color: #00aa87;
  border: 2px solid #ccc;
  border-right: none;
  border-left: none;
  width: 100%;
  height: 46px;
  padding-left: 20px;
  color: #fff;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 140%;
  letter-spacing: 0.15px;
  display: flex;
  flex-direction: unset;
  justify-content: unset;
  align-items: center;
`;

export const ArticleContent = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: unset;
  list-style: none;
`;

export const FigureInner = styled.figure`
  gap: 4px;
  display: flex;
  flex-direction: unset;
  justify-content: unset;
  align-items: unset;
`;

export const FigureBtn = styled.button`
  width: 56px;
  height: 24px;
  background-color: #fff;
  margin: 6px 0;
  border: 2px solid #ccc;
  color: #00aa87;
  gap: 3px;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 130%;
  letter-spacing: 0;
  display: flex;
  flex-direction: unset;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
`;
