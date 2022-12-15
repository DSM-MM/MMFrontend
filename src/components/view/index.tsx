import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject, GetProjectType } from "../../apis/getProject";
import Header from "../common/header";
import * as S from "./styles";

export const ViewProject = () => {
  const param = useParams();
  const [information, setInformation] = useState<GetProjectType>();
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
              <S.SupportButton>지원하기</S.SupportButton>
            </S.ButtonWrapper>
          </S.InnerWrapper>
        </S.Wrapper>
      </div>
    </>
  );
};

export default ViewProject;
