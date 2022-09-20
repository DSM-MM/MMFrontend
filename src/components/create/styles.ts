import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { Folder } from "../../assets";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const InnerWrapper = styled.div`
  width: 90.4%;
  height: 100%;
  margin: 5% 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 50%;
  height: 100%;
  color: ${theme.color.black000};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & > input {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
  }
  & > span {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin: 20px 0 20px 0;
  }
`;

export const TagInput = styled.input`
  width: 40%;
  font-size: 15px;
  line-height: 20px;
  color: ${theme.color.gray004};
`;

export const Tag = styled.div`
  width: max-content;
  padding: 4px 8px 4px 8px;
  border-radius: 15px;
  background-color: ${theme.color.maincolor};
  color: ${theme.color.white000};
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    color: ${theme.color.black000};
    background-color: ${theme.color.white000};
  }
`;

export const TagWrapper = styled.div`
  width: 50%;
  height: 27.5px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
`;

export const FileWrapper = styled.form`
  width: 100%;
  & > input {
    opacity: 0;
    position: relative;
    right: 6%;
  }
`;

export const CoreWrapper = styled.div`
  textarea {
    width: 90%;
    min-height: 500px;
    font-size: 16px;
    line-height: 22px;
    color: ${theme.color.black000};
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: ${theme.color.maincolor};
    }
    resize: none;
  }
`;

export const ButtonWrapper = styled.div`
  width: 60%;
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: max-content;
  padding: 10px 50px 10px 50px;
  background-color: ${theme.color.maincolor};
  color: ${theme.color.white000};
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: ${theme.color.black000};
    background-color: ${theme.color.white000};
    border: 1.5px solid ${theme.color.black000};
  }
`;
