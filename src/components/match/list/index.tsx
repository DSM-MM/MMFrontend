import * as S from "./styles";
import { useState } from "react";
import {
  AppDevelop,
  WebDevelop,
  ProgrammingDevelop,
  Field,
} from "../../../constance/filterList";

const FilterList = () => {
  const [click, setClick] = useState<boolean>(false);
  return (
    <>
      <S.MentoTitle>멘토 목록</S.MentoTitle>
      <S.FieldWrapper>
        {Field.map((value: string, index: number) => (
          <div key={index} onClick={() => setClick(true)}>
            <span>{value}</span>
          </div>
        ))}
      </S.FieldWrapper>
    </>
  );
};

export default FilterList;
