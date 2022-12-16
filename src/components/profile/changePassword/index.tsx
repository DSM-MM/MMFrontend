import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getProfile } from "../../../apis/profile";
import {
  changePasswordFunction,
  PasswordType,
} from "../../../apis/changePasswordFunction";
import { customToast } from "../../../util/toast/toast";

interface PropsType {
  setModal: Dispatch<SetStateAction<boolean>>;
}

const ChangePassword = ({ setModal }: PropsType) => {
  const [passwordState, setPasswordState] = useState<PasswordType>({
    name: "",
    email: "",
    password: "",
    newPassword: "",
    newPasswordValid: "",
    introduction: "",
    jobGroup: "",
    language: "",
    githubLink: "",
  });
  useEffect(() => {
    getProfile()
      .then((res) => {
        if (res) {
          setPasswordState({
            ...passwordState,
            name: res.data.nickName,
            email: res.data.email,
            introduction: res.data.introduction,
            jobGroup: res.data.jobGroup,
            language: res.data.language,
            githubLink: res.data.githubLink,
          });
        }
      })
      .catch((err) => console.error(err));
  }, []);
  const onChangeInput = (value: string, dic: string) => {
    setPasswordState({
      ...passwordState,
      [dic]: value,
    });
  };
  const preventEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const closeModalOnClick = () => {
    setModal(false);
  };
  const changePasswordOnClick = () => {
    changePasswordFunction(passwordState)
      .then(() => {
        setModal(false);
        customToast("비밀번호 변경 성공!", "success");
      })
      .catch((err) => {
        customToast("비밀번호 변경 실패!", "error");
        console.error(err);
      });
  };
  return (
    <_Wrapper onClick={closeModalOnClick}>
      <_Modal onClick={preventEvent}>
        <_Title>비밀번호 변경</_Title>
        <_InputWrapper>
          <_Input
            placeholder="이전 비밀번호를 입력하세요."
            type="password"
            value={passwordState.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeInput(e.target.value, "password")
            }
          />
        </_InputWrapper>
        <_InputWrapper>
          <_Input
            placeholder="변경할 비밀번호를 입력하세요."
            type="password"
            value={passwordState.newPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeInput(e.target.value, "newPassword")
            }
          />
        </_InputWrapper>
        <_InputWrapper>
          <_Input
            placeholder="변경한 비밀번호를 입력하세요."
            type="password"
            value={passwordState.newPasswordValid}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeInput(e.target.value, "newPasswordValid")
            }
          />
        </_InputWrapper>
        <_ButtonWrapper>
          <_ChangeButton onClick={closeModalOnClick}>뒤로 가기</_ChangeButton>
          <_ChangeButton onClick={changePasswordOnClick}>
            비밀번호 변경
          </_ChangeButton>
        </_ButtonWrapper>
      </_Modal>
    </_Wrapper>
  );
};

export default ChangePassword;

const _Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  display: grid;
  place-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

const _ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const _Title = styled.span`
  font-size: 32px;
  font-weight: bold;
`;

const _Modal = styled.div`
  width: 550px;
  height: 800px;
  background: #fdfdfd;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
`;

const _InputWrapper = styled.div`
  width: 350px;
  height: 50px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

const _Input = styled.input`
  width: 250px;
  font-family: "Noto Sans";
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: black;
  background: transparent;
  ::placeholder {
    color: #666666;
  }
`;

const _ChangeButton = styled.button`
  width: 150px;
  height: 50px;
  background: #343434;
  color: #ffffff;
  border-radius: 10px;
  :hover {
    background: transparent;
    color: #343434;
  }
`;
