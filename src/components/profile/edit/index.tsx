import Header from "../../common/header"
import * as S from "../styles"
import Pencil from "../Pencil"

const editProfile = () => {

    return (
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
                            <Pencil/>프로필 완료
                        </S.ProfileEditButton>
                    </S.ProfilePictureDiv>
                    <S.Content>
                        <S.Name>홍 길 동</S.Name>
                        <S.EditIntroduce>DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 UP 파팅</S.EditIntroduce>
                        <S.InfoDiv>
                            <S.Info>
                                <S.InfoTitle>Email</S.InfoTitle>
                                <S.InfoContentInput/>
                            </S.Info>
                            <S.Info>
                                <S.InfoTitle>비밀번호</S.InfoTitle>
                                <S.InfoContentInput/>
                            </S.Info>
                            <S.Info>
                                <S.InfoTitle>평점</S.InfoTitle>
                                <S.InfoContentInput/>
                            </S.Info>
                            <S.Info>
                                <S.InfoTitle>직군</S.InfoTitle>
                                <S.InfoContentInput/>
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

export default editProfile