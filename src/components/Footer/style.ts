import styled from "styled-components";

export const FooterWrap = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 22vh;
  background-color: #fff;
  border: 1px solid #ccc;
  flex-direction: column;

  & > a {
    display: flex;
    gap: 10px;
  }

  & > a > img {
    width: 50px;
    height: 50px;
  }

  & > p {
    margin-top: 20px;
  }
`;
