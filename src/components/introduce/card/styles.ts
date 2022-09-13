import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const Card = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.color.white001};
`;

export const SideBar = styled.div`
  width: 20px;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

export const SideBarReverse = styled(SideBar)`
  flex-direction: column-reverse;
`;

export const GrayBar = styled.div`
  width: 20px;
  height: 240px;
  background-color: ${theme.color.gray000};
`;

export const BlackBar = styled.div`
  width: 20px;
  height: 160px;
  background-color: ${theme.color.maincolor};
`;

export const Name = styled.span`
  width: 100px;
  height: 35px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  border-bottom: 1.5px solid ${theme.color.black000};
  text-align: center;
`;

export const Job = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

export const ColumnWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
`;

export const Wrapper = styled.div`
  width: 750px;
  height: 200px;
  display: flex;
  align-items: center;
  padding: 0 0 0 30px;
`;

export const WrapperReverse = styled(Wrapper)`
  justify-content: flex-end;
  padding: 0 30px 0 0;
`;
