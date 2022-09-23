import Header from "../common/header"
import * as S from "./styles"
import Pencil from "./Pencil"
import { GithubLogo } from "../../assets"

const Profile = () => {
    return(
        <S.Body>
            <Header />
            <S.Wrapper>
                <S.Background>
                    <img src={"https://www.notion.so/images/page-cover/gradients_3.png"}/>
                </S.Background>
                <S.Profile>
                    <S.ProfilePictureDiv>
                        <S.ProfilePicture src={"https://www.notion.so/images/page-cover/gradients_3.png"}/>
                        <S.ProfileEditButton>
                            <Pencil/>프로필 편집
                        </S.ProfileEditButton>
                    </S.ProfilePictureDiv>
                    <S.Content>
                        <S.NameDiv>
                            <S.Name>홍 길 동</S.Name>
                            <img src={GithubLogo}/>
                        </S.NameDiv>
                        <S.Introduce>DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 UP 파팅</S.Introduce>
                        <S.InfoDiv>
                            <S.Info>
                                <S.InfoTitle>Email</S.InfoTitle>
                                <S.InfoContent>Test123@gmail.com</S.InfoContent>
                            </S.Info>
                            <S.Info>
                                <S.InfoTitle>비밀번호</S.InfoTitle>
                                <S.PasswordDiv>
                                    <span>●●●●●●●</span>
                                </S.PasswordDiv>
                            </S.Info>
                            <S.Info>
                                <S.InfoTitle>평점</S.InfoTitle>
                                <S.InfoContent>1.33</S.InfoContent>
                            </S.Info>
                            <S.Info>
                                <S.InfoTitle>직군</S.InfoTitle>
                                <S.InfoContent>Frontend Developer</S.InfoContent>
                            </S.Info>
                            <S.Info>
                                <S.InfoTitle>사용언어</S.InfoTitle>
                                <span>C, C++, Java, etc</span>
                            </S.Info>
                        </S.InfoDiv>
                    </S.Content>
                    <S.ProjectDiv>
                        <S.MyProjects>내 프로젝트</S.MyProjects>
                        <S.ProjectList>
                            <S.Project>
                                <S.ProjectTitle>DSM UP MM</S.ProjectTitle>
                                <S.ParticipationField>참가분야 : Frontend Developer</S.ParticipationField>
                            </S.Project>
                            <S.Project>
                                <S.ProjectTitle>MBTogether</S.ProjectTitle>
                                <S.ParticipationField>참가분야 : Frontend Developer</S.ParticipationField>
                            </S.Project>
                            <S.Project>
                                <S.ProjectTitle>DMS Student</S.ProjectTitle>
                                <S.ParticipationField>참가분야 : Frontend Developer</S.ParticipationField>
                            </S.Project>
                        </S.ProjectList>
                    </S.ProjectDiv>
                </S.Profile>
            </S.Wrapper>
        </S.Body>
    )
}

export default Profile