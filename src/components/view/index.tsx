import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProject, GetProjectType } from "../../apis/getProject";
import Header from "../common/header";
import * as S from "./styles";

export const ViewProject = () => {
  const param = useParams();
  const nav = useNavigate();
  const [information, setInformation] = useState<GetProjectType>();
  const backPage = () => {
    nav(-1);
  };
  useEffect(() => {
    if (param.id)
      getProject(param.id)
        .then((res) => setInformation(res.data))
        .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div style={{ display: "flex" }}>
        <Header />
        <S.Wrapper>
          <S.InnerWrapper>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <S.Title>{information?.title}</S.Title>
              <S.Text>{information?.period}</S.Text>
              <S.TagWrapper>
                <S.Tag>{information?.needed}</S.Tag>
              </S.TagWrapper>
            </div>
            <S.Text>
              {information?.content
                .split("\n")
                .map((line: string, index: number) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
            </S.Text>
            <S.ButtonWrapper>
              <S.SupportButton onClick={backPage}>뒤로 가기</S.SupportButton>
              <S.SupportButton>지원하기</S.SupportButton>
            </S.ButtonWrapper>
          </S.InnerWrapper>
        </S.Wrapper>
      </div>
    </>
  );
};

export default ViewProject;
