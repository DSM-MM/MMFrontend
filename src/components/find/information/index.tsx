import * as S from "./styles";
import { MMMainLogo } from "../../../assets";

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
          <S.Tag>
            <S.TagWrapper>{tag}</S.TagWrapper>
          </S.Tag>
        </S.InformationWrapper>
      </S.CardWrapper>
  );
};

export default Information;
