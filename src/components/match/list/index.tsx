import { useEffect, useState } from "react";
import * as S from "./styles";
import styled from "@emotion/styled";
import CardList from "../cardlist";
import {
  DevelopList,
  ProgrammingDevelop,
  WebDevelop,
  AppDevelop,
} from "../../../constance/filterList";
import NumberList from "./number";

interface PropsType {
  id: number;
  text: string;
  name: string;
}

const List = () => {
  const [content, setContent] = useState();
  const selectComponent = {
    first: <NumberList list={ProgrammingDevelop} />,
    second: <NumberList list={WebDevelop} />,
    third: <NumberList list={AppDevelop} />,
  };

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as any;
    setContent(name);
  };

  const getButton = (data: PropsType) => {
    return (
      <>
        <S.TopListBackground
          key={data.id}
          name={data.name}
          onClick={(e) => {
            handleClickButton(e);
          }}
          width={data.id === 1 ? 10 : 3}
        >
          <span>{data.text}</span>
        </S.TopListBackground>
      </>
    );
  };

  return (
    <>
      <div style={{ width: "70%", paddingTop: "5vh" }}>
        <S.MentoTitle>멘토 목록</S.MentoTitle>
      </div>
      <S.FieldWrapper>
        {DevelopList.map((data) => getButton(data))}
      </S.FieldWrapper>
      <S.ListWrapper>
        {content && (
          <S.SelectedContentWrapper>
            {selectComponent[content]}
          </S.SelectedContentWrapper>
        )}
        <NewAddMento>
          <S.TopListBackground
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              (window.location.href = "/mento/create")
            }
            width={10}
          >
            멘토 생성
          </S.TopListBackground>
        </NewAddMento>
      </S.ListWrapper>
      <CardList />
    </>
  );
};

const NewAddMento = styled.div`
  width: 60%;
`;

export default List;
