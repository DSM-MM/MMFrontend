import * as S from "./styles";
import { Time, Field } from "../../../constance/field";
import { Link } from "react-router-dom";

const TopList = () => {
  return (
    <>
      <S.FieldWrapper>
        <S.Title>프로젝트 목록</S.Title>
        <S.Flex>
          <S.SubHeading>분야</S.SubHeading>
          {Field.map((value: { id: number; field: string }) => (
            <S.FieldDiv key={value.id}>{value.field}</S.FieldDiv>
          ))}
        </S.Flex>
        <S.Flex>
          <S.SubHeading>기간</S.SubHeading>
          {Time.map((value: { id: number; len: string }) => (
            <S.FieldDiv key={value.id}>{value.len}</S.FieldDiv>
          ))}
        </S.Flex>
      </S.FieldWrapper>
      <S.ButtonWrapper>
        <Link to="/find/create">
          <S.CreateButton>프로젝트 생성</S.CreateButton>
        </Link>
      </S.ButtonWrapper>
    </>
  );
};

export default TopList;
