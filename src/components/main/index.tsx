import Header from "../common/header/index";
import Board from "./board/index";
import styled from "@emotion/styled";
import Mento from "./mento/index";

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;

const Side = styled.div`
  width: 100%;
  height: auto;
  margin-left: 10%;
`;

const Main = () => {
  return (
    <>
      <MainWrapper>
        <Header />
        <Side>
          <Board />
          <Mento />
        </Side>
      </MainWrapper>
    </>
  );
};

export default Main;
