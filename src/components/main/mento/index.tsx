import * as S from "./styles";
import { List } from "../../../constance/main/card/index";
import { ProfileLogo } from "../../../assets/index";
import { useEffect, useState } from "react";
import { getTopThree, TopThreeType } from "../../../apis/top3";

interface TopMemberType {
  id: number;
  major: string;
  name: string;
  introduction: string;
  rating: number;
}

const Mento = () => {
  const [top, setTop] = useState<TopThreeType[]>();
  useEffect(() => {
    getTopThree()
      .then((res) => {
        console.log(res.data);
        setTop(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  const visitedMentoTop3 = (id: number) => {
    window.location.href = `/mento/${id}`;
  };
  return (
    <>
      <S.MentoWrapper>
        <S.Title>평점이 높은 멘토 TOP 3</S.Title>
        <S.CardWrapper>
          {top &&
            top.map((element: TopMemberType, index: number) => {
              if (index < 3)
                return (
                  <S.Card
                    key={element.id}
                    onClick={() => visitedMentoTop3(element.id)}
                  >
                    <S.CardText>{element.major}</S.CardText>
                    <S.ProfileCircle>
                      <img src={ProfileLogo} alt="Profile Img" />
                    </S.ProfileCircle>
                    <S.CardText>{element.name}</S.CardText>
                    <S.CardText>"{element.introduction}"</S.CardText>
                    <S.GPA>평점 : {element.rating}</S.GPA>
                  </S.Card>
                );
            })}
        </S.CardWrapper>
      </S.MentoWrapper>
    </>
  );
};

export default Mento;
