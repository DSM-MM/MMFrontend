import Header from "../common/header";
import * as S from "./styles";
import { ProfileImage } from "../../assets";
import { useEffect, useState } from "react";
import { getProfile, ProfileType, ProjectType } from "../../apis/profile";

const Pencil = () => {
  return (
    <S.Pencil
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5869 4.16105L13.2362 5.51169C13.0985 5.64939 12.8759 5.64939 12.7382 5.51169L9.48607 2.25961C9.34837 2.12191 9.34837 1.89925 9.48607 1.76154L10.8367 0.410905C11.3846 -0.136968 12.2753 -0.136968 12.8261 0.410905L14.5869 2.17172C15.1377 2.71959 15.1377 3.61025 14.5869 4.16105ZM8.32586 2.92175L0.632148 10.6154L0.0110251 14.1751C-0.0739398 14.6556 0.345025 15.0716 0.825516 14.9896L4.38525 14.3656L12.079 6.6719C12.2167 6.5342 12.2167 6.31153 12.079 6.17383L8.82686 2.92175C8.68623 2.78405 8.46357 2.78405 8.32586 2.92175ZM3.63522 9.95621C3.47408 9.79507 3.47408 9.53724 3.63522 9.3761L8.14714 4.86421C8.30828 4.70307 8.56611 4.70307 8.72725 4.86421C8.88839 5.02535 8.88839 5.28317 8.72725 5.44431L4.21532 9.95621C4.05418 10.1173 3.79636 10.1173 3.63522 9.95621ZM2.57755 12.4202H3.98387V13.4837L2.09413 13.8148L1.18295 12.9036L1.51402 11.0139H2.57755V12.4202Z"
        fill="white"
      />
    </S.Pencil>
  );
};

const Profile = () => {
  const [userState, setUserState] = useState<ProfileType>();
  const [update, setUpdate] = useState<boolean>(false);
  useEffect(() => {
    getProfile()
      .then((res) => {
        if (res) {
          setUserState(res.data);
          console.log(res);
        };
      })
      .catch((err) => console.error(err));
  }, []);
  const logoutOnClick = () => {
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("refresh_token");
    window.location.href = "/";
  };
  return (
    <S.Body>
      <Header />
      <S.Wrapper>
        <S.Background>
          <img
            src={"https://www.notion.so/images/page-cover/gradients_3.png"}
            alt="Background"
          />
        </S.Background>
        <S.Profile>
          <S.ProfilePictureDiv>
            <S._ProfileWrapper>
              <S.ProfilePicture src={ProfileImage} alt="Profile" />
            </S._ProfileWrapper>
            <S._Wrapper>
              <S.Logout onClick={logoutOnClick}>로그아웃</S.Logout>
              <S.ProfileEditButton onClick={() => setUpdate(true)}>
                <Pencil />
                프로필 편집
              </S.ProfileEditButton>
            </S._Wrapper>
          </S.ProfilePictureDiv>
          <S.Content>
            <S.Name>{userState?.nickName}</S.Name>
            <S.Introduce>{userState?.introduction}</S.Introduce>
            <S.InfoDiv>
              <S.Info>
                <S.InfoTitle>Email</S.InfoTitle>
                <S.InfoContent>{userState?.email}</S.InfoContent>
              </S.Info>
              <S.Info>
                <S.InfoTitle>비밀번호</S.InfoTitle>
                <S.InfoContent></S.InfoContent>
              </S.Info>
              <S.Info>
                <S.InfoTitle>평점</S.InfoTitle>
                <S.InfoContent>{userState?.provider}</S.InfoContent>
              </S.Info>
              <S.Info>
                <S.InfoTitle>직군</S.InfoTitle>
                <S.InfoContent>{userState?.jobGroup} Developer</S.InfoContent>
              </S.Info>
              <S.Info>
                <S.InfoTitle>사용언어</S.InfoTitle>
                <span>{userState?.language}</span>
              </S.Info>
            </S.InfoDiv>
          </S.Content>
          <S.ProjectDiv>
            <S.MyProjects>내 프로젝트</S.MyProjects>
            <S.ProjectList>
              {userState?.projects ? (
                userState?.projects.map((ele: ProjectType) => (
                  <S.Project key={ele.id}>
                    <S.ProjectTitle>{ele.title}</S.ProjectTitle>
                    <S.ParticipationField>
                      참가분야: {ele.needed}
                    </S.ParticipationField>
                  </S.Project>
                ))
              ) : (
                <span>프로젝트가 비어있습니다.</span>
              )}
            </S.ProjectList>
          </S.ProjectDiv>
        </S.Profile>
      </S.Wrapper>
    </S.Body>
  );
};

export default Profile;
