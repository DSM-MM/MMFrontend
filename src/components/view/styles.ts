import styled from "@emotion/styled";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 36px;
  line-height: 49px;
  color: ${theme.color.black000};
  margin-bottom: 20px;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${theme.color.black000};
  margin-bottom: 10px;
`;

export const Tag = styled.div`
  width: max-content;
  background-color: ${theme.color.maincolor};
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  color: ${theme.color.white000};
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
`;

export const TagWrapper = styled.div`
  display: flex;
  margin-bottom: 5%;
`;

export const FieldWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
`;

export const SupportButton = styled.button`
  width: max-content;
  height: max-content;
  padding: 8px 20px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: ${theme.color.maincolor};
  color: ${theme.color.white000};
  cursor: pointer;
  &:hover {
    background-color: ${theme.color.white001};
    color: ${theme.color.black000};
  }
`;
