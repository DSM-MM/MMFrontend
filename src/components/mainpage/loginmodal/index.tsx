import { useState } from "react";
import { GoogleOAuth, MMMainLogo } from "../../../assets";
import { Job } from "../../../constance/signup";
import * as S from "./styles";

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
  const GoogleURL: string = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/userinfo.email`;
  const [values, setValue] = useState<{ id: string; password: string }>({
    id: "",
    password: "",
  });
  const [radio, setRadio] = useState<string>("Frontend");
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
  const onClick = (): void => {
    window.location.assign(GoogleURL);
    localStorage.getItem("token");
    localStorage.getItem("access-token");
  };
  console.log(`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`);
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
                  name="email"
                  type="email"
                  autoComplete="off"
                  placeholder="이메일을 입력해주세요."
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
                <S.Button>로그인</S.Button>
              </S.LoginListBottom>
              <S.GoogleLogin onClick={onClick}>
                <S.GoogleImg src={GoogleOAuth} alt="구글 사진" />
                <span>구글로 로그인</span>
              </S.GoogleLogin>
            </S.InformationBlock>
          </>
        ) : (
          <>
            <S.Wrapper>
              <span onClick={() => setSignUp(true)}>&lt;</span>
            </S.Wrapper>
            <S.SignUpTitle>회원가입</S.SignUpTitle>
            <S.InputFlexWrapper>
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
            </S.InputFlexWrapper>
            <S.JobWrapper>
              {Job.map((v) => (
                <S.JobCheckWrapper key={v.id}>
                  <S.CheckBox
                    checked={radio === v.job}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const { name } = e.target;
                      setRadio(name);
                    }}
                    type="radio"
                    name={v.job}
                    id="check"
                  />
                  <label htmlFor="check">{v.job}</label>
                </S.JobCheckWrapper>
              ))}
            </S.JobWrapper>
            <S.SignUpButton>회원가입</S.SignUpButton>
          </>
        )}
      </S.ModalItem>
    </S.ModalBackground>
  );
};

export default LoginModal;
