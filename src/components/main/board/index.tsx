import * as S from "./styles";
import { FamousSaying } from "../../../constance/main/index";
import SnowFall from "react-snowfall";
import { useContext } from "react";
import { SettingContext } from "../../../util/snow";

const Board = () => {
  const rand = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const settings = useContext(SettingContext);
  return (
    <S.BoardWrapper>
      <S.Board>
        <SnowFall
          style={{
            width: "63%",
            height: "30vh",
            marginTop: "4.5%",
            marginLeft: "23.5%",
          }}
          color={settings.color}
          snowflakeCount={settings.snowflakeCount}
        />
        <span className="title">오 늘 의 명 언</span>
        <span className="famous">
          {FamousSaying[rand(0, FamousSaying.length - 1)]}
        </span>
      </S.Board>
    </S.BoardWrapper>
  );
};

export default Board;
