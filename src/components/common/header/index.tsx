import { Link } from "react-router-dom";
import * as S from "./styles";
import {
  ProfileLogo,
  MentoMatch,
  Messenger,
  FindProject,
  MMMainLogo,
} from "../../../assets";

const Header = () => {
  return (
    <>
      <S.HeaderWrapper>
        <S.MenuWrapper>
          <Link className="profile" to="/profile">
            <img src={ProfileLogo} alt="Profile Logo" />
          </Link>
          <Link className="menu" to="/mento">
            <img src={MentoMatch} alt="Mento Match Logo" />
          </Link>
          <Link className="menu" to="/message">
            <img src={Messenger} alt="Messenger" />
          </Link>
          <Link className="menu" to="/find">
            <img src={FindProject} alt="Find" />
          </Link>
        </S.MenuWrapper>
        <Link className="main" to="/main">
          <img className="mainLogo" src={MMMainLogo} alt="MM Main Logo" />
        </Link>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
