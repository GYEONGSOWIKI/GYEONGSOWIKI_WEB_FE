import styled from "styled-components";

export const FooterWrap = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
  width: 100%;
  height: 22vh;
  background-color: #fff;
  border: 1px solid #ccc;
  flex-direction: column;

  & > a {
    display: flex;
    align-items: center;
    color: gray;
  }

  & > a > img {
    width: 130px;
    height: 44px;
    aspect-ratio: auto;
  }
`;

export const InfoWrap = styled.div`
  padding: 0 0 0 10px;

  & > p {
    margin-top: 10px;
    line-height: 1;
  }
`;
