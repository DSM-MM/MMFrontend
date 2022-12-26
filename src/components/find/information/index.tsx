import * as S from "./styles";
import { MMMainLogo } from "../../../assets";
import styled from "@emotion/styled";

interface PropsType {
  title: string;
  time: string;
  tag: string;
}

const Information = ({ title, time, tag }: PropsType) => {
  return (
    <S.CardWrapper>
      <S.Img src={MMMainLogo} alt="List Img" />
      <S.InformationWrapper>
        <S.Title>{title}</S.Title>
        <S.Text>기간: {time}</S.Text>
        <_Wrapper>
          {tag.split(" ").map((element: string, index: number) => (
            <S.Tag key={index}>
              <S.TagWrapper>{element}</S.TagWrapper>
            </S.Tag>
          ))}
        </_Wrapper>
      </S.InformationWrapper>
    </S.CardWrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
`;

export default Information;
