import { useState } from "react";
import { login } from "../../../apis/login";
import { signup } from "../../../apis/signup";
import { MMMainLogo, Eyes, NotEyes } from "../../../assets";
import { Job } from "../../../constance/signup";
import { customToast } from "../../../util/toast/toast";
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

interface loginResponseDataProps {
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpireDate: number;
}

interface ValuesType {
  email: string;
  password: string;
}

const LoginModal = ({ setModal }: PropsType) => {
  const [values, setValue] = useState<ValuesType>({
    email: "",
    password: "",
  });
  const [radio, setRadio] = useState<string>("Frontend");
  const [show, setShow] = useState<boolean>(false);
  const [signUpShow, setSignUpShow] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<boolean>(true);
  const [signUpInformation, setSignUpInformation] =
    useState<SignUpInformationProps>({
      name: "",
      email: "",
      password: "",
      oneLineIntroduce: "",
    });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.target;
    setValue({ ...values, [name]: value });
  };
  const LoginOnClick = () => {
    if (values.email && values.password) {
      login(values)
        .then((res) => {
          const {
            accessToken,
            refreshToken,
            accessTokenExpireDate,
          }: loginResponseDataProps = res.data;
          const expires: Date = new Date(Date.now() + accessTokenExpireDate);
          window.localStorage.setItem("access_token", accessToken);
          window.localStorage.setItem("refresh_token", refreshToken);
          //새로고침
          window.location.href = "/main";
        })
        .catch((err) => {
          const status: number = err.response.status.status;
          if (status === 404) {
            alert("이메일이나 비밀번호를 한번 더 확인하세요");
            return;
          }
          customToast("로그인에 실패하였습니다", "error");
        });
    } else {
      console.log("아무것도 입력되어있지 않음");
      customToast("아이디 또는 비밀번호가 입력되어있지 않습니다.", "error");
    }
  };

  const showPassword = () => {
    setShow(!show);
  };
  const showPasswordInSignUp = () => {
    setSignUpShow(!signUpShow);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.ModalBackground onClick={() => setModal(false)}>
      <S.ModalItem
        onSubmit={onSubmit}
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
                  value={values.email}
                  onChange={onChange}
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  autoComplete="off"
                  placeholder="비밀번호를 입력해주세요."
                  value={values.password}
                  onChange={onChange}
                />
                <img
                  src={show ? NotEyes : Eyes}
                  onClick={showPassword}
                  alt="비밀번호"
                />
              </S.InputWrapper>
              <S.LoginListBottom>
                <S.Text>아직 계정이 없으신가요?</S.Text>
                <S.SignUpText onClick={() => setSignUp(false)}>
                  회원가입
                </S.SignUpText>
                <S.Button onClick={LoginOnClick}>로그인</S.Button>
              </S.LoginListBottom>
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
                  type={signUpShow ? "text" : "password"}
                  value={signUpInformation.password}
                  placeholder="비밀번호를 입력하세요."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSignUpInformation((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
                />
                <img
                  src={signUpShow ? NotEyes : Eyes}
                  onClick={showPasswordInSignUp}
                  alt="비밀번호"
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
            <S.SignUpButton
              onClick={() =>
                signup(
                  signUpInformation.name,
                  signUpInformation.email,
                  signUpInformation.password,
                  signUpInformation.oneLineIntroduce,
                  radio
                )
                  .then((res) => {
                    console.log(res);
                    customToast("회원가입에 성공하였습니다.", "success");
                    setSignUp(true);
                  })
                  .catch((err) => {
                    console.error(err);
                    customToast("회원가입에 실패하였습니다.", "error");
                  })
              }
            >
              회원가입
            </S.SignUpButton>
          </>
        )}
      </S.ModalItem>
    </S.ModalBackground>
  );
};

export default LoginModal;
