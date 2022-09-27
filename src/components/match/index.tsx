import Header from "../common/header/index";
import List from "./list/index";
import * as S from "./styles";

const Match = () => {
  return (
    <>
      <S.Body>
        <Header />
        <S.Wrapper>
          <List />
        </S.Wrapper>
      </S.Body>
    </>
  );
};

export default Match;
