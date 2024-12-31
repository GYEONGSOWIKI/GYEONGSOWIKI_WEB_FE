import styled from "styled-components";

export const TopCont = styled.div`
  width: 100%;
  min-height: 100svh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WelcomeWrap = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 0 0 0 10px;
  margin: 50px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;

  & > h1 {
    color: #191919;
    font-size: 24px;
  }

  & > h2 {
    color: #9e9ea7;
    padding-top: 5px;
    font-size: 15px;
  }
`;

export const MainCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  background-color: #f5f5f5;
`;

export const MainWrap = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 480px;
  max-height: 500px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleWrap = styled.div`
  width: 100%;
  max-width: 99%;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;

  & > h1 {
    border-bottom: #e4e8e8 1px solid;
    padding: 0px 0px 10px 0px;
    font-size: 17px;
  }
`;

export const SymbolWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 40px 0px 25px 0px;
  justify-content: center;
`;

export const FormWrap = styled.div`
  & > form {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 40px;
    gap: 30px;
    -webkit-user-select: none;
    user-select: none;
  }

  .submitBtn {
    cursor: pointer;
    background-color: #00aa87;
    color: #fff;
    transition: all 0.1s ease-in;
    border: none;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    justify-content: center;
    gap: 10px;
    font-weight: 700;

    &:hover {
      background-color: #029678;
    }
  }
`;
