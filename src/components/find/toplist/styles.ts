import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const Title = styled.span`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const SubHeading = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  padding-top: 5px;
  margin: 0 20px 10px 0;
`;

export const Flex = styled.div`
  display: flex;
`;

export const FieldDiv = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 20px;
  display: grid;
  place-content: center;
  background-color: ${theme.color.white000};
  color: ${theme.color.gray003};
  &:hover {
    background-color: ${theme.color.maincolor};
    color: ${theme.color.white000};
  }
`;

export const FieldWrapper = styled.div`
  width: 900px;
  height: 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 100px;
`;

export const CreateButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: ${theme.color.maincolor};
  color: ${theme.color.white000};
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: ${theme.color.white000};
    color: ${theme.color.black000};
    border-radius: 1.5px solid black;
  }
`;

export const ButtonWrapper = styled.div`
  width: 900px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;
