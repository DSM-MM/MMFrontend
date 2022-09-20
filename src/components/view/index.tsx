import { Data } from "../../constance/find";
import Header from "../common/header";
import Field from "./field";
import * as S from "./styles";

export const ViewProject = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Header />
        <S.Wrapper>
          <S.InnerWrapper>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <S.Title>{Data.title}</S.Title>
              <S.Text>{Data.name}</S.Text>
              <S.Text>{Data.day}</S.Text>
              <S.TagWrapper>
                {Data.tag.map((e: string, i: number) => (
                  <S.Tag key={i}>{e}</S.Tag>
                ))}
              </S.TagWrapper>
            </div>
            <S.Text>{Data.text}</S.Text>
            <S.FieldWrapper>
              <div>
                <Field job={"Frontend"} list={Data.frontend} />
                <Field job={"Backend"} list={Data.backend} />
                <Field job={"Design"} list={Data.Design} />
              </div>
            </S.FieldWrapper>
            <S.ButtonWrapper>
              <S.SupportButton>지원하기</S.SupportButton>
            </S.ButtonWrapper>
          </S.InnerWrapper>
        </S.Wrapper>
      </div>
    </>
  );
};

export default ViewProject;
