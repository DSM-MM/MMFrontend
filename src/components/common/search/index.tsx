import styled from "@emotion/styled";
import { SearchBtn } from "../../../assets/index";
import theme from "../../../styles/theme";

const InputWrapper = styled.div`
  width: 15vw;
  height: 36px;
  border-radius: 1rem;
  border: 1px solid ${theme.color.gray002};
  display: flex;
  align-items: center;
  input {
    border: none;
    padding-left: 20px;
  }
  input::placeholder {
    color: ${theme.color.gray002};
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
        <input
          type="text"
          placeholder="검색 용어를 입력해주세요."
          autoComplete="off"
        />
      </InputWrapper>
    </>
  );
};

export default SearchInput;
