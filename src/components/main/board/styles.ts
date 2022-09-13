import styled from "@emotion/styled";

export const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Board = styled.div`
  width: 70%;
  height: 30vh;
  background: #343434;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  color: #ffffff;
  .title {
    padding-top: 3%;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
  }
  .famous {
    padding-top: 5%;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
  }
`;