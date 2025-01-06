import styled from "styled-components";

export const MyPageArea = styled.main`
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

export const MyPageWrap = styled.figure`
  width: 100%;
  height: fit-content;
  padding: 30px;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: unset;
`;

export const MyPageBoard = styled.div`
  width: 100%;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: unset;
`;

export const MyPageDescWrap = styled.main`
  padding: 20px 0;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: unset;
`;

export const MyInfoWrap = styled.div`
  & > button {
    padding: 7px 12px;
    background-color: #00aa87;
    transition: all 0.1s ease-in;
    color: #fff;
    border: 1px solid #00aa87;
    border-radius: 5px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      background-color: #029678;
    }
  }
`;
