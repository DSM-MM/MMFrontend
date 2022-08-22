import * as S from "./styles";
import { useState } from "react";
import {
  AppDevelop,
  WebDevelop,
  ProgrammingDevelop,
  Field,
} from "../../../constance/filterList";

function FilterList() {
  const [click, setClick] = useState<boolean>(false);
  return (
    <>
      <S.MentoTitle>멘토 목록</S.MentoTitle>
      <S.FieldWrapper>
        {Field.map((value: string, index: number) => (
          <S.TopListBackground
            key={index}
            width={index === 0 ? 10 : 3}
            onClick={() => setClick(true)}
          >
            <span>{value}</span>
          </S.TopListBackground>
        ))}
      </S.FieldWrapper>
      
    </>
  );
}
export default FilterList;
