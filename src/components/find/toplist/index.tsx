import * as S from "./styles";
import { Time, Field } from "../../../constance/field";
import { Link } from "react-router-dom";
import SearchInput from "../../common/search";

interface PropsType {
  jobFilter: string;
  setJobFilter: (filter: string) => void;
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

const TopList = ({ jobFilter, setJobFilter, searchValue, setSearchValue }: PropsType) => {
  const onClickTimeButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("아직 구현 중 입니다.");
  };
  const onClickJobButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as any;
    if (name === jobFilter) {
      setJobFilter("");
      return;
    }
    setJobFilter(name);
    console.log(jobFilter);
  };
  return (
    <>
      <S.FieldWrapper>
        <S.Title>프로젝트 목록</S.Title>
        <S.Flex>
          <S.SubHeading>분야</S.SubHeading>
          {Field.map((value: { id: number; field: string }) => (
            <S.FieldDiv
              onClick={onClickJobButton}
              name={value.field}
              key={value.id}
            >
              {value.field}
            </S.FieldDiv>
          ))}
        </S.Flex>
        <S.Flex>
          <S.SubHeading>기간</S.SubHeading>
          {Time.map((value: { id: number; len: string }) => (
            <S.FieldDiv onClick={onClickTimeButton} key={value.id}>
              {value.len}
            </S.FieldDiv>
          ))}
        </S.Flex>
      </S.FieldWrapper>
      <S.ButtonWrapper>
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
        <Link to="/find/create">
          <S.CreateButton>프로젝트 생성</S.CreateButton>
        </Link>
      </S.ButtonWrapper>
    </>
  );
};

export default TopList;
