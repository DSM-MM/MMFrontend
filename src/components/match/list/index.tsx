import { useEffect, useState } from "react";
import * as S from "./styles";
import CardList from "../cardlist";
import {
  AppDevelop,
  WebDevelop,
  ProgrammingDevelop,
  DevelopList,
} from "../../../constance/filterList";
import NumberList from "./number";

interface PropsType {
  id?: number;
  text: string;
  name: string;
}

const List = () => {
  const [content, setContent] = useState();
  const selectComponent = {
    first: <NumberList arr={ProgrammingDevelop} />,
    second: <NumberList arr={WebDevelop} />,
    third: <NumberList arr={AppDevelop} />,
  };
  const [isSelected, setSelected] = useState<boolean[]>(
    new Array(3).fill(false)
  );

  const handleClickButton = (e: any) => {
    const { name } = e.target;
    setContent(name);
  };

  return (
    <>
      <div style={{ width: "70%", paddingTop: "5vh" }}>
        <S.MentoTitle>멘토 목록</S.MentoTitle>
      </div>
      <S.FieldWrapper>
        {DevelopList.map((data: PropsType) => (
          <S.TopListBackground
            onClick={handleClickButton}
            key={data.id}
            name={data.name}
            width={data.id === 1 ? 10 : 3}
          >
            <span>{data.text}</span>
          </S.TopListBackground>
        ))}
      </S.FieldWrapper>
      {content && <div>{selectComponent[content]}</div>}
      <CardList />
    </>
  );
};

export default List;
