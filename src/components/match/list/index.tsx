import * as S from "./styles";
import styled from "@emotion/styled";
import { CardInformation } from "../../../constance/card";
import Card from "../card";
import {
  AppDevelop,
  WebDevelop,
  ProgrammingDevelop,
} from "../../../constance/filterList";

function List() {
  const click: boolean[] = new Array(3).fill(false);
  return (
    <>
      <S.MentoTitle>멘토 목록</S.MentoTitle>
      <S.FieldWrapper>
        <S.TopListBackground width={10}>
          <span>프로그래밍 언어</span>
        </S.TopListBackground>
        <S.TopListBackground width={3}>
          <span>웹</span>
        </S.TopListBackground>
        <S.TopListBackground width={3}>
          <span>앱</span>
        </S.TopListBackground>
      </S.FieldWrapper>
      <CardListWrapper>
        {CardInformation.map((v, i) => (
          <Card
            key={i}
            job={v.job}
            name={v.name}
            introduce={v.introduce}
            Gpa={v.gpa}
          />
        ))}
      </CardListWrapper>
    </>
  );
}

const CardListWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
`;
export default List;
