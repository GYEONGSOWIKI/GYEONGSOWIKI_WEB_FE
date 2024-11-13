import styled from "styled-components";

export const InputWrap = styled.div`
  & > label {
    color: #9e9ea7;
    font-size: 14px;
    padding: 0px 0px 3px 0px;
  }

  & > input {
    width: 400px;
    padding: 15px 25px;
    font-size: 13px;
    background-color: #f5f5f5;
    color: #9e9ea7;
    border: 1px #e4e8e8 solid;
    border-radius: 5px;
    transition: all 0.1s ease-in;
    outline: transparent 1px solid;
  }
`;
