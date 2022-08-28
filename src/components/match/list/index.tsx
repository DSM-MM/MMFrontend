import * as S from "./styles";
import styled from "@emotion/styled";
import { CardInformation } from "../../../constance/card";
import Card from "../card";
import {
  AppDevelop,
  WebDevelop,
  ProgrammingDevelop,
  Field,
} from "../../../constance/filterList";

function List() {
  const click: boolean[] = new Array(3).fill(false);
  return (
    <>
      <S.MentoTitle>멘토 목록</S.MentoTitle>
      <S.FieldWrapper>
        {Field.map((value: string, index: number) => (
          <S.TopListBackground
            key={index}
            width={index === 0 ? 10 : 3}
            onClick={() => (click[index] = !click[index])}
          >
            <span>{value}</span>
          </S.TopListBackground>
        ))}
      </S.FieldWrapper>
      {click[0] ? (
        <>
          {ProgrammingDevelop.map((value: string, index: number) => (
            <div key={index}>{value}</div>
          ))}
        </>
      ) : click[1] ? (
        <>
          {WebDevelop.map((value, index) => (
            <div key={index}>{value}</div>
          ))}
        </>
      ) : click[2] ? (
        <>
          {AppDevelop.map((value, index) => (
            <div key={index}>dfdfdf</div>
          ))}
        </>
      ) : null}
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
  flex-wrap: wrap;
`;
export default List;
