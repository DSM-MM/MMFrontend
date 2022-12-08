import * as S from "./styles";
import { FamousSaying } from "../../../constance/main/index";

const Board = () => {
  const rand = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <>
      <S.BoardWrapper>
        <S.Board>
          <span className="title">오 늘 의 명 언</span>
          <span className="famous">
            {FamousSaying[rand(0, FamousSaying.length - 1)]}
          </span>
        </S.Board>
      </S.BoardWrapper>
    </>
  );
};

export default Board;
