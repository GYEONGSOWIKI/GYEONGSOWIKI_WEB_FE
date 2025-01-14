import styled from "styled-components";

export const FooterCont = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 70px;
  width: 100%;
  height: 22vh;
  background-color: #fff;
  border: 1px solid #ccc;
  flex-direction: column;
`;

export const FooterWrap = styled.div`
  width: 100%;

  .topFooter {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    .logo {
      width: 125px;
      height: 44px;
      filter: invert(1);
      aspect-ratio: auto;
    }
  }

  .topBottom {
    border-top: 0.0625rem solid #dadee0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    padding-top: 12px;
  }
`;

export const InfoWrap = styled.div`
  .top-title {
    font-weight: bolder;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .top-desc {
    margin-bottom: 4px;
  }

  img {
    cursor: pointer;
  }
`;
