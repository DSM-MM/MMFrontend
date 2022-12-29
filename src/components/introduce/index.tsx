import { useParams } from "react-router";
import Header from "../common/header";
import * as S from "./styles";
import MentoCard from "./card";
import { Link } from "react-router-dom";
import { rating } from "../../apis/rating";
import styled from "@emotion/styled";
import { customToast } from "../../util/toast/toast";
import { useState } from "react";

const Introduce: React.FC = () => {
  const id = useParams().id;
  const [state, setState] = useState<number>(0);
  const evaluate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const evaluateValue: string | null =
      window.prompt("평점을 입력하세요.(0 ~ 5)");
    const number = Number(evaluateValue);
    e.preventDefault();
    if (number < 0) {
      customToast("값을 잘못입력하셨습니다", "error");
    } else if (number > 5 || number === null) {
      customToast("값을 잘못 입력하셨습니다.", "error");
    } else {
      if (id) {
        rating(id, {
          rating: number,
        })
          .then((res) => {
            console.log(res);
            customToast("평점을 반영하였습니다.", "success");
            setState(state + 1);
          })
          .catch((err) => {
            console.error(err);
            customToast("개발자 오류", "error");
          });
      }
    }
  };
  return (
    <_Wrapper>
      <Header />
      <S.IntroduceWrapper>
        <_InnerWrapper>
          <_InnerToInnerWrapper>
            <S.IntroduceText>멘토 소개</S.IntroduceText>
          </_InnerToInnerWrapper>
          <MentoCard id={id} state={state} />
          <S.ButtonWrapper>
            <S.LinkButton onClick={evaluate}>평가하기</S.LinkButton>
            <Link to="/mento">
              <S.LinkButton>다른 멘토 찾기</S.LinkButton>
            </Link>
          </S.ButtonWrapper>
        </_InnerWrapper>
      </S.IntroduceWrapper>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
`;

const _InnerWrapper = styled.div`
  width: 100%;
`;

const _InnerToInnerWrapper = styled.div`
  margin-bottom: 20px;
`;

export default Introduce;
