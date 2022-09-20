import styled from "@emotion/styled";
import theme from "../../styles/theme";

export const IntroduceText = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
`;

export const IntroduceWrapper = styled.div`
  width: 100%;
  display: grid;
  place-content: center;
`;

export const ButtonWrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-around;
`;

export const LinkButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: ${theme.color.maincolor};
  border-radius: 10px;
  color: ${theme.color.white000};
  margin-top: 80px;
  &:hover {
    background-color: ${theme.color.white000};
    color: ${theme.color.black000};
    border: 1px solid ${theme.color.black000};
  }
`;
