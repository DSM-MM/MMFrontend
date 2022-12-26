import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProject, GetProjectType } from "../../apis/getProject";
import Header from "../common/header";
import * as S from "./styles";
import { customToast } from "../../util/toast/toast";

export const ViewProject = () => {
  const param = useParams();
  const nav = useNavigate();
  const [information, setInformation] = useState<GetProjectType>();
  const backPage = () => {
    nav(-1);
  };
  const supportOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    customToast("추가 구현 계획입니다.", "error");
  };
  useEffect(() => {
    if (param.id)
      getProject(param.id)
        .then((res) => {
          console.log(res);
          setInformation(res.data);
        })
        .catch((err) => console.error(err));
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <S.Wrapper>
        <S.InnerWrapper>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <S.Title>{information?.title}</S.Title>
            <S.Text>{information?.period}</S.Text>
            <S.TagWrapper>
              {information?.needed
                .split(" ")
                .map((element: string, index: number) => (
                  <S.Tag key={index}>{element}</S.Tag>
                ))}
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
            <S.SupportButton onClick={supportOnClick}>지원하기</S.SupportButton>
          </S.ButtonWrapper>
        </S.InnerWrapper>
      </S.Wrapper>
    </div>
  );
};

export default ViewProject;
