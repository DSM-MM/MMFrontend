import Header from "../common/header";
import * as S from "./styles";
import styled from "@emotion/styled";
import { ProfileImage, GithubSvg } from "../../assets";
import { useEffect, useState } from "react";
import { getProfile, ProfileType, ProjectType } from "../../apis/profile";
import { customToast } from "../../util/toast";
import { setMy, MyType } from "../../apis/setMy";
import { getMyProjectList, MyProjectType } from "../../apis/getMyProjectList";
import ChangePassword from "./changePassword";

const Profile = () => {
  const [userState, setUserState] = useState<ProfileType>();
  const [changeState, setChangeState] = useState<MyType>({
    email: "",
    introduction: "",
    jobGroup: "",
    language: "",
    githubLink: "",
  });
  const [myProject, setMyProject] = useState<MyProjectType>();
  const [update, setUpdate] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  useEffect(() => {
    getProfile()
      .then((res) => {
        if (res) {
          setUserState(res.data);
          console.log(res);
        }
      })
      .catch((err) => console.error(err));
    getMyProjectList()
      .then((res) => setMyProject(res.data))
      .catch((err) => console.error(err));
  }, []);
  const logoutOnClick = () => {
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("refresh_token");
    window.location.href = "/";
  };

  const onChange = (value: string, dir: string) => {
    setChangeState({
      ...changeState,
      [dir]: value,
    });
  };
  const gotoGithubLinkOnClick = () => {
    if (userState?.githubLink) {
      const githubId: string = userState.githubLink;
      window.location.href = `https://github.com/${githubId}`;
    } else {
      customToast("깃허브를 등록하지 않았습니다.", "error");
    }
  };
  const edit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!update) {
      setUpdate(true);
      return;
    }
    setMy(changeState)
      .then(() => window.location.reload())
      .catch((error) => console.error(error));
  };
  const changePassword = () => {
    setModal(true);
  };
  return (
    <S.Body>
      {modal && <ChangePassword setModal={setModal} />}
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
              <S.ProfileEditButton onClick={edit}>
                {update ? "편집 완료" : "프로필 편집"}
              </S.ProfileEditButton>
            </S._Wrapper>
          </S.ProfilePictureDiv>
          {!update ? (
            <S.Content>
              <_NameWrapper>
                <S.Name>{userState?.nickName}</S.Name>
                <_GithubImage
                  src={GithubSvg}
                  onClick={gotoGithubLinkOnClick}
                  alt="go to github"
                />
              </_NameWrapper>
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
          ) : (
            <S.Content>
              <S.Name>{userState?.nickName}</S.Name>
              <S.Introduce>
                <_IntroductionWrapper>
                  <_Input
                    value={changeState.introduction}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(e.target.value, "introduction")
                    }
                    placeholder="자기소개를 입력하세요."
                  />
                </_IntroductionWrapper>
              </S.Introduce>
              <S.InfoDiv>
                <S.Info>
                  <S.InfoTitle>Email</S.InfoTitle>
                  <S.InfoContent>
                    <_Input
                      value={changeState.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChange(e.target.value, "email")
                      }
                      placeholder="이메일을 입력하세요."
                    />
                  </S.InfoContent>
                </S.Info>
                <S.Info>
                  <S.InfoTitle>비밀번호</S.InfoTitle>
                  <S.InfoContent onClick={changePassword}>
                    비밀번호 변경
                  </S.InfoContent>
                </S.Info>
                <S.Info>
                  <S.InfoTitle>직군</S.InfoTitle>
                  <S.InfoContent>
                    <_Input
                      value={changeState.jobGroup}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChange(e.target.value, "jobGroup")
                      }
                      placeholder="직군을 입력하세요."
                    />{" "}
                    Developer
                  </S.InfoContent>
                </S.Info>
                <S.Info>
                  <S.InfoTitle>사용언어</S.InfoTitle>
                  <_Input
                    value={changeState.language}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(e.target.value, "language")
                    }
                    placeholder="사용언어를 입력하세요."
                  />
                </S.Info>
                <S.Info>
                  <S.InfoTitle>Github ID</S.InfoTitle>
                  <_Input
                    value={changeState.githubLink}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(e.target.value, "githubLink")
                    }
                    placeholder="Github 프롤필을 입력하세요."
                  />
                </S.Info>
              </S.InfoDiv>
            </S.Content>
          )}
          <S.ProjectDiv>
            <S.MyProjects>내 프로젝트</S.MyProjects>
            <S.ProjectList>
              {myProject?.projects.map((ele) => (
                <S.Project key={ele.id}>
                  <S.ProjectTitle>{ele.title}</S.ProjectTitle>
                  <S.ParticipationField>
                    참가분야: {ele.preference}
                  </S.ParticipationField>
                </S.Project>
              ))}
            </S.ProjectList>
          </S.ProjectDiv>
        </S.Profile>
      </S.Wrapper>
    </S.Body>
  );
};

const _Input = styled.input`
  background-color: transparent;
`;

const _IntroductionWrapper = styled.div`
  width: 1200px;
  height: 90px;
  background-color: #f8f8f8;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 8px 12px;
  input {
    width: 100%;
  }
`;

const _NameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 13px;
`;

const _GithubImage = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export default Profile;
