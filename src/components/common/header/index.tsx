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
          <S.Menu to="/profile">
            <img className="profile" src={ProfileLogo} alt="Profile Logo" />
          </S.Menu>
          <S.Menu to="/mento">
            <img className="menu" src={MentoMatch} alt="Mento Match Logo" />
          </S.Menu>
          <S.Menu to="/message">
            <img className="menu" src={Messenger} alt="Messenger" />
          </S.Menu>
          <S.Menu to="/find">
            <img className="menu" src={FindProject} alt="Find" />
          </S.Menu>
        </S.MenuWrapper>
        <img className="mainLogo" src={MMMainLogo} alt="MM Main Logo" />
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
