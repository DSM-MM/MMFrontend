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
import { getProfile } from "../../../apis/profile";
import { createMento } from "../../../apis/createMento";
import { customToast } from "../../../util/toast/toast";

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

  const handleClickButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { name } = e.target as any;
    if (name === content) {
      setContent(undefined);
    } else setContent(name);
  };

  const createMentoFunction = (e: React.MouseEvent<HTMLButtonElement>) => {
    // window.location.href = "/mento/create";
    getProfile()
      .then((res) => {
        console.log(res);
        const response = res?.data;
        if (response) {
          const request = {
            name: response.nickName,
            major: response.jobGroup,
            email: response.email,
            introduction: response.introduction,
            language: response.language,
            jobGroup: "NULL",
          };
          if (window.confirm("멘토 추가하시겠습니까?")) {
            createMento(request).then((response) => {
              console.log(response.data);
              customToast("성공적으로 추가되었습니다.", "success");
            });
          } else {
            customToast("취소하셨습니다.", "error");
            console.log("취소");
          }
        }
      })
      .catch((err) => console.error(err));
  };

  const getButton = (data: PropsType) => {
    return (
      <S.TopListBackground
        key={data.id}
        name={data.name}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          handleClickButton(e);
        }}
        width={data.id === 1 ? 10 : 3}
      >
        {data.text}
      </S.TopListBackground>
    );
  };

  return (
    <>
      <div style={{ width: "70%", paddingTop: "5vh" }}>
        <S.MentoTitle>멘토 목록</S.MentoTitle>
      </div>
      <S.FieldWrapper>
        {DevelopList.map((data: PropsType) => getButton(data))}
      </S.FieldWrapper>
      <S.ListWrapper>
        {content && (
          <S.SelectedContentWrapper>
            {selectComponent[content]}
          </S.SelectedContentWrapper>
        )}
      </S.ListWrapper>
      <S.ListWrapper>
        <NewAddMento>
          <S.TopListBackground onClick={createMentoFunction} width={10}>
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
