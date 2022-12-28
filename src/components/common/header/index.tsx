import { Link } from "react-router-dom";
import * as S from "./styles";
import {
  ProfileLogo,
  MentoMatch,
  FindProject,
  MMMainLogo,
} from "../../../assets";
import styled from "@emotion/styled";

const Header: React.FC = () => {
  const gotoTop = async () => {
    await window.scrollTo(0, 0);
  };
  return (
    <S.HeaderWrapper>
      <S.MenuWrapper>
        <Link className="profile" onClick={gotoTop} to="/profile">
          <img src={ProfileLogo} alt="Profile Logo" />
        </Link>
        <_Link onClick={gotoTop} to="/mento">
          <img src={MentoMatch} alt="Mento Match Logo" />
        </_Link>
        <Link onClick={gotoTop} to="/find">
          <img src={FindProject} alt="Find" />
        </Link>
      </S.MenuWrapper>
      <Link className="main" onClick={gotoTop} to="/main">
        <img className="mainLogo" src={MMMainLogo} alt="MM Main Logo" />
      </Link>
    </S.HeaderWrapper>
  );
};

const _Link = styled(Link)`
  width: 15%;
  height: 15%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
