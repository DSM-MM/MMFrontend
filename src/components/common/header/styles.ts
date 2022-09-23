import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import theme from "../../../styles/theme";

export const HeaderWrapper = styled.div`
  width: 7.6%;
  background-color: ${theme.color.maincolor};
  height: 100%;
  position: fixed;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  .mainLogo {
    width: 50%;
    height: 50%;
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Menu = styled(Link)`
  width: 22%;
  height: 22%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    cursor: pointer;
  }
  .profile {
    width: 100%;
    height: 100%;
  }
  .menu {
    width: 90%;
    height: 90%;
  }
`;
