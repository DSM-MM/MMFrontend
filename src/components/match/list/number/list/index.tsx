import styled from "@emotion/styled";

interface PropsType {
  id: number;
  name: string;
  width: number;
}

const List = ({ id, name, width }: PropsType) => {
  return (
    <>
      <Btn width={width}>
        <span key={id}>{name}</span>
      </Btn>
    </>
  );
};

const Btn = styled.button<{ width: number }>`
  width: ${(props) => `${props.width}rem`};
  height: 40px;
  margin-right: 30px;
  border-radius: 10px;
  display: grid;
  place-content: center;
  &:hover {
    background-color: #343434;
    color: white;
  }
`;

export default List;
