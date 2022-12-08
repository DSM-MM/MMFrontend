import styled from "@emotion/styled";
import theme from "../../styles/theme";

export const Body = styled.div`
  display: flex;
`;

export const _Wrapper = styled.div`
  display: flex;
`;

export const Logout = styled.button`
  background: ${theme.color.maincolor};
  color: ${theme.color.white000};
  border-radius: 7px;
  width: max-content;
  padding: 0 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 10%;
`;

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
`;

export const _ProfileWrapper = styled.div`
  z-index: 1;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfcfc;
`;

export const Profile = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfilePictureDiv = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

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
`;

export const Pencil = styled.svg`
  margin-right: 5px;
`;

export const ProfilePicture = styled.img``;

export const Content = styled.div`
  padding-left: 14px;
`;

export const NameDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.h2`
  font-size: 34px;
  font-weight: 600;
  width: 126px;
  margin-top: 13px;
`;

export const Introduce = styled.div`
  margin-top: 20px;
  font-size: 14px;
`;

export const InfoDiv = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 120px;
`;

export const Info = styled.div`
  height: 40px;
  display: flex;
`;

export const InfoTitle = styled.p`
  width: 120px;
  font-weight: 500;
  font-size: 16px;
`;

export const InfoContent = styled.p`
  font-size: 14px;
  max-width: 288px;
`;

export const ProjectDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 750px;
  margin-top: 310px;
`;

export const MyProjects = styled.h3`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
`;

export const ProjectList = styled.div`
  margin-top: 40px;
  border-radius: 10px;
  padding: 10px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #d9d9d9;
`;

export const Project = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  background-color: #fcfcfc;
  margin-bottom: 10px;
`;

export const ProjectTitle = styled.h3`
  padding-top: 26px;
  padding-left: 33px;
  font-size: 24px;
  font-weight: 400;
`;

export const ParticipationField = styled.p`
  font-size: 14px;
  text-align: end;
  padding-bottom: 13px;
  padding-right: 14px;
`;
