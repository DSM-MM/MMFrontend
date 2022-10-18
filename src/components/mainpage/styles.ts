import styled from "@emotion/styled";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 45px;
  line-height: 61px;
  margin: 15% 0 5% 0;
`;

export const LoginBtn = styled.div`
  width: 175px;
  height: 50px;
  border: 2.5px solid ${theme.color.black000};
  border-radius: 10px;
  font-weight: 600;
  font-size: 25px;
  line-height: 34px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  &:hover {
    background-color: ${theme.color.maincolor};
    color: ${theme.color.white000};
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftImg = styled.img`
  width: 300px;
`;

export const RightImg = styled.img`
  width: 300px;
`;

export const ArrowImg = styled.img`
  cursor: pointer;
`;

export const ArrowWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const IntroduceWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 35px;
  line-height: 48px;
`;

export const TextWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > img {
    width: 456px;
    height: 456px;
  }
`;
