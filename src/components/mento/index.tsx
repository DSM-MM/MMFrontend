import styled from "@emotion/styled";
import Header from "../common/header";
import * as S from "../introduce/card/styles";
import { useState } from "react";
import theme from "../../styles/theme";
import { createMento, MentoType } from "../../apis/createMento";
import { useNavigate } from "react-router-dom";

const CreateMento = () => {
  const [mento, setMento] = useState<MentoType>({
    name: "",
    major: "",
    email: "",
    introduction: "",
    language: "",
    jobGroup: "null",
  });
  const nav = useNavigate();
  const onChange = (dic: string, value: string) => {
    setMento({
      ...mento,
      [dic]: value,
    });
  };
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    createMento(mento)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <_Wrapper>
      <Header />
      <_InnerWrapper>
        <S.Card>
          <S.SideBar>
            <S.GrayBar style={{ borderRadius: "5px 0 0 0" }} />
            <S.BlackBar style={{ borderRadius: "0 0 0 5px" }} />
          </S.SideBar>
          <S.ColumnWrapper>
            <S.Wrapper>
              <S.ColumnWrapper>
                <_NameWrapper>
                  <_Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange("name", e.target.value)
                    }
                    value={mento.name}
                    placeholder="이름을 입력하세요"
                  />
                </_NameWrapper>
                <_MajorWrapper>
                  <_Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange("major", e.target.value)
                    }
                    placeholder="전공을 입력하세요"
                  />
                </_MajorWrapper>
              </S.ColumnWrapper>
            </S.Wrapper>
            <S.WrapperReverse>
              <S.ColumnWrapper>
                <_TextWrapper>
                  Email:{" "}
                  <_Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange("email", e.target.value)
                    }
                    placeholder="ex) test12@naver.com"
                  />
                </_TextWrapper>
                <_TextWrapper>
                  Introduce:{" "}
                  <_Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange("introduction", e.target.value)
                    }
                    placeholder="ex) 프론트엔드 개발자"
                  />
                </_TextWrapper>
                <_TextWrapper>
                  언어:{" "}
                  <_Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange("language", e.target.value)
                    }
                    placeholder="사용 가능한 언어"
                  />
                </_TextWrapper>
              </S.ColumnWrapper>
            </S.WrapperReverse>
          </S.ColumnWrapper>
          <S.SideBarReverse>
            <S.GrayBar style={{ borderRadius: "0 0 5px 0" }} />
            <S.BlackBar style={{ borderRadius: "0 5px 0 0" }} />
          </S.SideBarReverse>
        </S.Card>
        <_SubmitButton onClick={onSubmit}>제출하기</_SubmitButton>
      </_InnerWrapper>
    </_Wrapper>
  );
};

const _TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  input {
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
  }
`;

const _MajorWrapper = styled.div`
  width: 190px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  justify-content: space-between;
  input {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;

const _NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  height: 35px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 33px;
  border-bottom: 1.5px solid ${theme.color.black000};
  text-align: center;
  input {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 33px;
  }
`;

const _Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const _InnerWrapper = styled.form`
  height: 100vh;
  margin-left: 9.6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const _SubmitButton = styled.button`
  width: max-content;
  padding: 10px 20px;
  background-color: #343434;
  color: white;
  margin-left: 30%;
  margin-top: 50px;
  border-radius: 10px;
  :hover {
    background-color: white;
    color: #343434;
  }
`;

const _Input = styled.input`
  width: 100%;
  background: transparent;
`;

export default CreateMento;
