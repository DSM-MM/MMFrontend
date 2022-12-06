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
import { useEffect, useState } from "react";
import LoginModal from "./loginmodal";
import { Element, Link } from "react-scroll"

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
      {modal && <LoginModal setModal={setModal} />}
      <Element name="1">
        <S.MainWrapper>
          <S.TitleDiv>
            <S.Title>각 분야의 전문가들과 같이 공부해봐요 !</S.Title>
            <S.LoginBtn onClick={() => setModal(true)}>Login</S.LoginBtn>
          </S.TitleDiv>
          <S.ImgWrapper>
            <S.LeftImg src={LeftShape} alt="shpae" />
            <S.ArrowWrapper>
              <Link to="2" spy={true} smooth={true}>
                <S.ArrowImg src={BottomArrow} alt="to move bottom"/>
              </Link>
            </S.ArrowWrapper>
            <S.RightImg src={RightShape} alt="shape" />
          </S.ImgWrapper>
        </S.MainWrapper>
      </Element>
      <Element name="2">
        <S.IntroduceWrapper>
          <Link to="1" spy={true} smooth={true}>
            <S.ArrowImg src={TopArrow} alt="to move top"/>
          </Link>
          <S.TextWrapper>
            <S.Text>
              MM은 랜덤으로 각 분야의 전문가들을 매칭시켜줍니다. <br />
              자신이 전공 실력을 키우고 싶다면 멘토 매칭을 해보세요 !
            </S.Text>
            <img alt="이미지1" src={Menu1} />
          </S.TextWrapper>
          <Link to="3" spy={true} smooth={true}>
            <S.ArrowImg src={BottomArrow} alt="to move bottom"/>
          </Link>
        </S.IntroduceWrapper>
      </Element>
      <Element name="3">
        <S.IntroduceWrapper>
          <Link to="2" spy={true} smooth={true}>
            <S.ArrowImg src={TopArrow} alt="to move top"/>
          </Link>
          <S.TextWrapper>
            <img alt="이미지1" src={Menu2} />
            <S.Text>
              매칭된 멘토와 같이 전공 이야기할 수 있습니다. <br />
              멘토와 소통하여 함께 전공 실력을 쌓아가세요 !
            </S.Text>
          </S.TextWrapper>
          <Link to="4" spy={true} smooth={true}>
            <S.ArrowImg src={BottomArrow} alt="to move bottom"/>
          </Link>
        </S.IntroduceWrapper>
      </Element>
      <Element name="4">
        <S.IntroduceWrapper>
          <Link to="3" spy={true} smooth={true}>
            <S.ArrowImg src={TopArrow} alt="to move top"/>
          </Link>
          <S.TextWrapper>
            <S.Text>
              다른 사람이랑 프로젝트를 진행할 수 있습니다. <br />
              프로젝트를 참여해 실력을 늘리세요 !
            </S.Text>
            <img alt="이미지1" src={Menu3} />
          </S.TextWrapper>
          <Link to="1" spy={true} smooth={true}>
            <S.ArrowImg src={TopArrow} alt="to move Top"/>
          </Link>
        </S.IntroduceWrapper>
      </Element>
      <Footer />
    </S.Wrapper>
  );
};

export default MainPage;
