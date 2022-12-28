import * as S from "./styles";
import {
  LeftShape,
  RightShape,
  BottomArrow,
  TopArrow,
  Menu1,
  Menu2,
  Menu3,
} from "../../assets";
import Footer from "../common/footer";
import { useEffect, useState, useRef } from "react";
import LoginModal from "./loginmodal";
import { Link } from "react-scroll";

const MainPage = () => {
  const [modal, setModal] = useState<boolean>(false);
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => (document.body.style.overflow = "unset"), 1000);
    }
  }, [modal]);
  return (
    <S.Wrapper>
      <S.Title>각 분야의 전문가들과 같이 공부해봐요 !</S.Title>
      <S.LoginBtn onClick={() => setModal(true)}>Login</S.LoginBtn>
      {modal && <LoginModal setModal={setModal} />}
      <S.ImgWrapper>
        <S.LeftImg src={LeftShape} alt="shpae" />
        <S.ArrowWrapper to="first" spy={true} smooth={true}>
          <S.ArrowImg src={BottomArrow} alt="to move bottom" />
        </S.ArrowWrapper>
        <S.RightImg src={RightShape} alt="shape" />
      </S.ImgWrapper>
      <S.IntroduceWrapper id="first">
        <S.ArrowImg
          src={TopArrow}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          alt="to move top"
        />
        <S.TextWrapper>
          <S.Text>
            MM은 랜덤으로 각 분야의 전문가들을 매칭시켜줍니다. <br />
            자신이 전공 실력을 키우고 싶다면 멘토 매칭을 해보세요 !
          </S.Text>
          <img alt="이미지1" src={Menu1} />
        </S.TextWrapper>
        <Link to="second" spy={true} smooth={true}>
          <S.ArrowImg src={BottomArrow} alt="to move bottom" />
        </Link>
      </S.IntroduceWrapper>
      <S.IntroduceWrapper id="second">
        <Link to="first" spy={true} smooth={true}>
          <S.ArrowImg src={TopArrow} alt="to move top" />
        </Link>
        <S.TextWrapper>
          <img alt="이미지1" src={Menu2} />
          <S.Text>
            매칭된 멘토와 같이 전공 이야기할 수 있습니다. <br />
            멘토와 소통하여 함께 전공 실력을 쌓아가세요 !
          </S.Text>
        </S.TextWrapper>
        <Link to="third" spy={true} smooth={true}>
          <S.ArrowImg src={BottomArrow} alt="to move bottom" />
        </Link>
      </S.IntroduceWrapper>
      <S.IntroduceWrapper id="third">
        <Link to="second" spy={true} smooth={true}>
          <S.ArrowImg src={TopArrow} alt="to move top" />
        </Link>
        <S.TextWrapper>
          <S.Text>
            다른 사람이랑 프로젝트를 진행할 수 있습니다. <br />
            프로젝트를 참여해 실력을 늘리세요 !
          </S.Text>
          <img alt="이미지1" src={Menu3} />
        </S.TextWrapper>
        <S.ArrowImg
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          src={TopArrow}
          alt="to move Top"
        />
      </S.IntroduceWrapper>
      <Footer />
    </S.Wrapper>
  );
};

export default MainPage;
