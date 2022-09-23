import Header from "../../common/header"
import * as S from "../styles"
import { GithubLogo } from "../../../assets"
import Pencil from "../Pencil"

const EditPassword = () => {
    return(
        <S.EditPassword width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5869 4.16105L13.2362 5.51169C13.0985 5.64939 12.8759 5.64939 12.7382 5.51169L9.48607 2.25961C9.34837 2.12191 9.34837 1.89925 9.48607 1.76154L10.8367 0.410905C11.3846 -0.136968 12.2753 -0.136968 12.8261 0.410905L14.5869 2.17172C15.1377 2.71959 15.1377 3.61025 14.5869 4.16105ZM8.32586 2.92175L0.632148 10.6154L0.0110251 14.1751C-0.0739398 14.6556 0.345025 15.0716 0.825516 14.9896L4.38525 14.3656L12.079 6.6719C12.2167 6.5342 12.2167 6.31153 12.079 6.17383L8.82686 2.92175C8.68623 2.78405 8.46357 2.78405 8.32586 2.92175ZM3.63522 9.95621C3.47408 9.79507 3.47408 9.53724 3.63522 9.3761L8.14714 4.86421C8.30828 4.70307 8.56611 4.70307 8.72725 4.86421C8.88839 5.02535 8.88839 5.28317 8.72725 5.44431L4.21532 9.95621C4.05418 10.1173 3.79636 10.1173 3.63522 9.95621ZM2.57755 12.4202H3.98387V13.4837L2.09413 13.8148L1.18295 12.9036L1.51402 11.0139H2.57755V12.4202Z" fill="black"/>
        </S.EditPassword>
    )
}

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
                    <S.NameDiv>
                            <S.Name>홍 길 동</S.Name>
                            <img src={GithubLogo}/>
                        </S.NameDiv>
                        <S.EditIntroduce>DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 DSM UP 화이팅 UP 파팅</S.EditIntroduce>
                        <S.InfoDiv>
                            <S.Info>
                                <S.InfoTitle>Email</S.InfoTitle>
                                <S.InfoContentInput/>
                            </S.Info>
                            <S.Info>
                                <S.InfoTitle>비밀번호</S.InfoTitle>
                                <S.PasswordDiv>
                                    <span>●●●●●●●</span>
                                    <EditPassword/>
                                </S.PasswordDiv>
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