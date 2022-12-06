import * as S from "./styles";
import { List } from "../../../constance/main/card/index";
import { ProfileLogo } from "../../../assets/index";

const Mento = () => {
  return (
    <>
      <S.MentoWrapper>
        <S.Title>평점이 높은 멘토 TOP 3</S.Title>
        <S.CardWrapper>
          {List.map((value, index) => (
            <S.Card key={index}>
              <S.CardText>{value.job}</S.CardText>
              <S.ProfileCircle>
                <img src={ProfileLogo} alt="Profile Img" />
              </S.ProfileCircle>
              <S.CardText>{value.name}</S.CardText>
              <S.CardText>"{value.introduce}"</S.CardText>
              <S.GPA>평점 : {value.grade}</S.GPA>
            </S.Card>
          ))}
        </S.CardWrapper>
      </S.MentoWrapper>
    </>
  );
};

export default Mento;
