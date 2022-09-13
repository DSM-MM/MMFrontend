import * as S from "./styles";

interface PropsType {
  title: string;
  maker: string;
  time: string;
  tag: string[];
}

const Information = ({ title, maker, time, tag }: PropsType) => {
  return (
    <>
      <S.CardWrapper>
        <S.Img src="" alt="List Img" />
        <S.InformationWrapper>
          <S.Title>{title}</S.Title>
          <S.Text>Project Manager: {maker}</S.Text>
          <S.Text>기간: {time}</S.Text>
          <S.Tag>
            {tag ? (
              tag.map((value, index) => (
                <S.TagWrapper key={index}>{value}</S.TagWrapper>
              ))
            ) : (
              <S.Text>비어있음</S.Text>
            )}
          </S.Tag>
        </S.InformationWrapper>
      </S.CardWrapper>
    </>
  );
};

export default Information;
