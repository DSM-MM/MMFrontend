import * as S from "./styles";
import {
  AppDevelop,
  WebDevelop,
  ProgrammingDevelop,
} from "../../../constance/filterList";
import CardList from "../cardlist";

function List() {
  const click: boolean[] = new Array(3).fill(false);
  return (
    <>
      <div style={{ width: "70%", paddingTop: "5vh" }}>
        <S.MentoTitle>멘토 목록</S.MentoTitle>
      </div>
      <S.FieldWrapper>
        <S.TopListBackground width={10}>
          <span>프로그래밍 언어</span>
        </S.TopListBackground>
        <S.TopListBackground width={3}>
          <span>웹</span>
        </S.TopListBackground>
        <S.TopListBackground width={3}>
          <span>앱</span>
        </S.TopListBackground>
      </S.FieldWrapper>
      <CardList />
    </>
  );
}

export default List;
