import styled from "@emotion/styled";

export const Body = styled.div`
    display: flex;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-bottom: 10%;
    margin-left: 7.6%;
`

export const Background = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40vh;
    cursor: default;

    box-sizing: border-box;

    img {
        display: block;
        object-fit: cover;
        border-radius: 0px;
        width: 100%;
        height: 40vh;
        opacity: 1;
        object-position: center 60%;
    }
`

export const Profile = styled.div`
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
`

export const ProfilePictureDiv = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: end;
`

export const ProfileEditButton = styled.button`
    font-size: 13px;
    font-weight: 500;
    box-sizing: border-box;
    background-color: #343434;
    color: white;
    width: 100px;
    height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Pencil = styled.svg`
    margin-right: 5px;
`

export const ProfilePicture = styled.img`
    z-index: 1;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.25);
`

export const Content = styled.div`
    padding-left: 14px;
`

export const NameDiv = styled.div`
    margin-top: 13px;
    display: flex;
    align-items: center;
    img {
        width: 15px;
        height: 15px;
    }
`

export const Name = styled.h2`
    font-size: 34px;
    font-weight: 600;
    width: 126px;
`

//추후 수정 예정
export const EditIntroduce = styled.textarea`
    width: 100%;
    margin-top: 20px;
    font-size: 14px;
    padding: 10px;
    border-radius: 10px;
    resize: vertical;
    min-height: 90px;
    background-color: #F8F8F8;
    border: 1px solid #D9D9D9;
    :focus {
        background-color: white;
    }
    -webkit-scrollbar {
        width: 10px;
        background-color: rgba(0, 0, 0, 0);
    }
    -webkit-scrollbar-thumb {
        background-color: #eee;
        border-radius: 5px;
    }
    -webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0);
    }
`

export const Introduce = styled.div`
    margin-top: 20px;
    font-size: 14px;
`

export const InfoDiv = styled.div`
    margin-top: 70px;   
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 120px;
`

export const Info = styled.div`
    height: 40px;
    display: flex;
`

export const InfoTitle = styled.p`
    width: 120px;
    font-weight: 500;
    font-size: 16px;
`
export const InfoContentInput = styled.input`
    height: 15px;
    padding-left: 14px;
    padding-bottom: 5px;
    font-size: 14px;
    max-width: 288px;
    border-bottom: 2px solid #000000;
`

export const PasswordDiv = styled.div`
    height: 15px;
    width: 202px;
    font-size: 7px;
    letter-spacing: 7px;
    padding-top: 7px;
    display: flex;
    justify-content: space-between;
`

export const EditPassword = styled.svg`
`

export const InfoContent = styled.p`
    font-size: 14px;
    max-width: 288px;
`

export const ProjectDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 750px;
    margin-top: 310px;
`

export const MyProjects = styled.h3`
    font-size: 32px;
    font-weight: 500;
    text-align: center;
`

export const ProjectList = styled.div`
    margin-top: 40px;
    border-radius: 10px;
    padding: 10px;
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #D9D9D9;
`

export const Project = styled.div`
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    background-color: #FCFCFC;
    margin-bottom: 10px;
`

export const ProjectTitle = styled.h3`
    padding-top: 26px;
    padding-left: 33px;
    font-size: 23px;
    font-weight: 400;
`

export const ParticipationField = styled.p`
    font-size: 14px;
    text-align: end;
    padding-bottom: 13px;
    padding-right: 14px;
`