import styled from "styled-components";

export const TopCont = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 4vw;
  height: 54px;
  background-color: #00aa87;
  position: fixed;
  z-index: 10;
  justify-content: space-between;
`;

export const HeaderCont = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavCont = styled.nav`
  display: flex;
  gap: 4.5vw;
  justify-content: center;
  align-items: center;
  list-style: none;

  .logo {
    width: 103px;
    height: 34px;
  }
`;

export const NavWrap = styled.div`
  display: flex;
  gap: 48px;
`;

export const SearchCont = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const SearchWrap = styled.form`
  position: relative;
  justify-content: flex-end;
  display: flex;
  align-items: center;

  .searchInput {
    width: 16vw;
    height: 30px;
    padding: 0 10px;
    font-weight: 500;
    background-color: #fff;
    border: 1px solid #ccc;
    outline: none;
    resize: none;

    &::placeholder {
      font-size: 12px;
    }
  }

  .searchBtn {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    width: auto;
    height: auto;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const SignInWrap = styled.div`
  gap: 6px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  .detail {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #fff;

    &:hover {
      color: #ccc;
    }
  }

  span {
    font-weight: 600;
  }

  .makeDoc {
    width: 85px;
    height: 35px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #00aa87;
    background-color: #fff;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: scale(1);

    &:hover {
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      transform: scale(1.05);
    }
  }
`;

export const ItemWrap = styled.div`
  color: #fff;
  font-weight: 600;
  gap: 6px;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: #ccc;
    fill: currentColor;
  }
`;
