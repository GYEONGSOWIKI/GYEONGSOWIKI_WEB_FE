import styled from "styled-components";

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
