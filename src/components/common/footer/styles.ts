import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const FooterContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${theme.color.maincolor};
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    position: relative;
    margin: 30px 20px 0 20vw;
    -webkit-user-drag: none;
  }
  span {
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const DeveloperPersonWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffffff;
`;

export const GithubWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .github {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
      :hover {
        text-decoration: underline;
      }
    }
  }
  img {
    width: 25px;
    height: 25px;
    -webkit-user-drag: none;
  }
`;

export const DeveloperWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .developer {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    a {
      margin-bottom: 10px;
      :hover {
        text-decoration: underline;
      }
    }
  }
  .title {
    font-weight: 500;
    line-height: 19px;
    margin-bottom: 15px;
  }
`;
