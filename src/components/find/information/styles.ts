import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const CardWrapper = styled.div`
  width: 900px;
  height: 200px;
  background-color: ${theme.color.white001};
  border: 1px solid #${theme.color.gray001};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
`;

export const InformationWrapper = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: ${theme.color.black000};
`;

export const Text = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: ${theme.color.black000};
`;

export const Tag = styled.div`
  display: flex;
  /* justify-content: space-around; */
`;

export const TagWrapper = styled.div`
  width: 100px;
  height: 20px;
  display: grid;
  place-content: center;
  background-color: ${theme.color.maincolor};
  border-radius: 5px;
  color: ${theme.color.white000};
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: ${theme.color.white000};
  margin-right: 10px;
`;
