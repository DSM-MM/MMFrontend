import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const HeaderWrapper = styled.div`
  width: 9.6%;
  height: 100vh;
  background-color: ${theme.color.maincolor};
  height: 100%;
  position: fixed;
  z-index: 999;
  background-color: #343434;
  display: flex;
  flex-direction: column;
  align-items: center;
  .mainLogo {
    width: 70%;
    height: 70%;
  }
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .profile {
    width: 25%;
    height: 25%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu {
    width: 15%;
    height: 15%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
