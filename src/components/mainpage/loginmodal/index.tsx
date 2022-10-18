import { useState } from "react";
import { MMMainLogo } from "../../../assets";
import * as S from "./styles";
import { Job } from "../../../constance/signup";

interface PropsType {
  setModal: (modal: boolean) => void;
}

interface SignUpInformationProps {
  name: string;
  email: string;
  password: string;
  oneLineIntroduce: string;
}

const LoginModal = ({ setModal }: PropsType) => {
  const [values, setValue] = useState<{ id: string; password: string }>({
    id: "",
    password: "",
  });
  const [check, setCheck] = useState<boolean[]>(
    new Array(Job.length).fill(false)
  );
  const [signUp, setSignUp] = useState<boolean>(true);
  const [signUpInformation, setSignUpInformation] =
    useState<SignUpInformationProps>({
      name: "",
      email: "",
      password: "",
      oneLineIntroduce: "",
    });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };
  return (
    <S.ModalBackground onClick={() => setModal(false)}>
      <S.ModalItem
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
        onClick={(e: React.MouseEvent<HTMLFormElement>) => e.stopPropagation()}
      >
        {signUp ? (
          <>
            <S.MainLogo src={MMMainLogo} alt="MainLogo" />
            <S.InformationBlock>
              <S.InputWrapper>
                <input
                  name="id"
                  type="text"
                  autoComplete="off"
                  placeholder="아이디를 입력해주세요."
                  value={values.id}
                  onChange={onChange}
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <input
                  name="password"
                  type="password"
                  autoComplete="off"
                  placeholder="비밀번호를 입력해주세요."
                  value={values.password}
                  onChange={onChange}
                />
              </S.InputWrapper>
              <S.LoginListBottom>
                <S.Text>아직 계정이 없으신가요?</S.Text>
                <S.SignUpText onClick={() => setSignUp(false)}>
                  회원가입
                </S.SignUpText>
                <S.Button onClick={() => console.log(values)}>로그인</S.Button>
              </S.LoginListBottom>
            </S.InformationBlock>
          </>
        ) : (
          <>
            <S.Wrapper>
              <span onClick={() => setSignUp(true)}>&lt;</span>
            </S.Wrapper>
            <S.SignUpTitle>회원가입</S.SignUpTitle>
            <S.InputWrapper>
              <input
                autoComplete="off"
                type="name"
                value={signUpInformation.name}
                placeholder="이름을 입력하세요."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSignUpInformation((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <input
                autoComplete="off"
                type="email"
                value={signUpInformation.email}
                placeholder="이메일을 입력하세요."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSignUpInformation((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <input
                autoComplete="off"
                type="password"
                value={signUpInformation.password}
                placeholder="비밀번호를 입력하세요."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSignUpInformation((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <input
                autoComplete="off"
                type="text"
                value={signUpInformation.oneLineIntroduce}
                placeholder="한줄 소개를 입력하세요."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSignUpInformation((prevState) => ({
                    ...prevState,
                    oneLineIntroduce: e.target.value,
                  }))
                }
              />
            </S.InputWrapper>
            <S.JobWrapper>
              <S.CheckBox type="checkbox" id="check" />
              <label htmlFor="check" />
            </S.JobWrapper>
          </>
        )}
      </S.ModalItem>
    </S.ModalBackground>
  );
};

export default LoginModal;
