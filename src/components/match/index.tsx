import Header from "../common/header/index";
import List from "./list/index";
import styled from "@emotion/styled";

const Match: React.FC = () => {
  return (
    <_Wrapper>
      <Header />
      <_InnerWrapper>
        <List />
      </_InnerWrapper>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
`;

const _InnerWrapper = styled.div`
  width: 90.4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10%;
`;

export default Match;
