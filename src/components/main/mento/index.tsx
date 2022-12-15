import * as S from "./styles";
import { List } from "../../../constance/main/card/index";
import { ProfileLogo } from "../../../assets/index";
import { useEffect, useState } from "react";
import { getTopThree } from "../../../apis/top3";

interface TopMemberType {
  id: number;
  major: string;
  name: string;
  introduction: string;
  rating: number;
}

const Mento = () => {
  const [top, setTop] = useState<any>();
  useEffect(() => {
    getTopThree()
      .then((res) => setTop(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <S.MentoWrapper>
        <S.Title>평점이 높은 멘토 TOP 3</S.Title>
        <S.CardWrapper>
          {top &&
            top.map((element: TopMemberType) => (
              <S.Card key={element.id}>
                <S.CardText>{element.major}</S.CardText>
                <S.ProfileCircle>
                  <img src={ProfileLogo} alt="Profile Img" />
                </S.ProfileCircle>
                <S.CardText>{element.name}</S.CardText>
                <S.CardText>"{element.introduction}"</S.CardText>
                <S.GPA>평점 : {element.rating}</S.GPA>
              </S.Card>
            ))}
        </S.CardWrapper>
      </S.MentoWrapper>
    </>
  );
};

export default Mento;
