import styled from "@emotion/styled";
import { SearchBtn } from "../../../assets/index";

const InputWrapper = styled.div`
  width: 15vw;
  height: 36px;
  border-radius: 1rem;
  border: 1px solid #aaaaaa;
  display: flex;
  align-items: center;
  input {
    border: none;
    padding-left: 20px;
  }
  input::placeholder {
    color: #aaaaaa;
  }
`;

const SearchInput = () => {
  return (
    <>
      <InputWrapper>
        <img
          src={SearchBtn}
          alt="Search Button"
          style={{ paddingLeft: "15px", cursor: "pointer" }}
        />
        <input type="text" placeholder="검색 용어를 입력해주세요." />
      </InputWrapper>
    </>
  );
};

export default SearchInput;
