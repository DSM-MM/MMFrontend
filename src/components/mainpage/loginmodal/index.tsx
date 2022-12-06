import { useState } from "react";
import { GoogleOAuth, MMMainLogo } from "../../../assets";
import { Job } from "../../../constance/signup";
import * as S from "./styles";
import axios from "axios"
import cookie from 'react-cookies'

interface PropsType {
  setModal: (modal: boolean) => void;
}

interface SignUpInformationProps {
	name: string,
	email: string,
  password:  string,
	introduction: string,
  jobGroup: number
}

interface loginResponseDataProps {
  grantType: string,
  accessToken: string,
  refreshToken: string,
  accessTokenExpireDate: number
}

const LoginModal = ({ setModal }: PropsType) => {
  const GoogleURL: string = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/userinfo.email`;
  const [values, setValue] = useState<{ id: string; password: string }>({
    id: "",
    password: "",
  });

  const baseUrl = "http://ec2-43-200-178-101.ap-northeast-2.compute.amazonaws.com";

  const login = () => {

    //values의 속성의 값들을 모두 배열로 변경
    const propsArray = Object.values(values);

    //forEach문으로 비었는지 확인
    propsArray.forEach(i => {
      if(i === "") {
        alert("값을 모두 입력해 주세요.");
        return;
      }
    })
    
    axios.post(`${baseUrl}/login`, values)
      .then(res => {
        const {accessToken, refreshToken, accessTokenExpireDate}: loginResponseDataProps = res.data;
        const expires: Date = new Date(Date.now() + accessTokenExpireDate);
        
        //쿠키 저장
        cookie.save('accessToken', accessToken, { path: '/'});
        cookie.save('refreshToken', refreshToken, { path: '/', expires: expires});

        alert("로그인에 성공했습니다.");
        
        //새로고침
        window.location.reload();
      })
      .catch(err => {
        const status: number = err.response.status.status;
        if(status === 404)
          alert("이메일 또는 비밀번호를 확인해주세요.");
      })
  }

  const [radio, setRadio] = useState<string>("Frontend");
  const [onSignUp, setOnSignUp] = useState<boolean>(false);
  const [signUpInformation, setSignUpInformation] =
    useState<SignUpInformationProps>({
      name: "",
      email: "",
      password:  "",
      introduction: "",
      jobGroup: 0,
    });

  const signUp = () => {

    //signUpInformation의 속성의 값들을 모두 배열로 변경
    const propsArray = Object.values(signUpInformation);

    //forEach문으로 비었는지 확인
    propsArray.forEach(i => {
      if(i === "") {
        alert("값을 모두 입력해 주세요.");
        return;
      }
    })

    axios.post(`${baseUrl}/signup`, signUpInformation)
      .then(res => {
        alert("회원가입에 성공했습니다.");

        //새로고침
        window.location.reload();
      })
      .catch(err => {
        const status: number = err.response.status.status;
        alert(`회원가입에 실패했습니다. 에러코드: ${status}`);
      })
  }

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
        {!onSignUp ? (
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
                <S.SignUpText onClick={() => setOnSignUp(true)}>
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
              <span onClick={() => setOnSignUp(true)}>&lt;</span>
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
                  value={signUpInformation.introduction}
                  placeholder="한줄 소개를 입력하세요."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSignUpInformation((prevState) => ({
                      ...prevState,
                      introduction: e.target.value,
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
            <S.SignUpButton onClick={()=>signUp()}>회원가입</S.SignUpButton>
          </>
        )}
      </S.ModalItem>
    </S.ModalBackground>
  );
};

export default LoginModal;
