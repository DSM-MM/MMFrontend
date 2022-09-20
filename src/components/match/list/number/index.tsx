import styled from "@emotion/styled";

interface PropsType {
  list: string[];
}

const NumberList: React.FC<PropsType> = ({ list }: PropsType) => (
  <>
    {list.map((value: string, index: number) => (
      <Btn key={index}>
        <span>{value}</span>
      </Btn>
    ))}
  </>
);

const Btn = styled.button`
  margin-right: 30px;
  width: 4rem;
  height: 40px;
  border-radius: 1rem;
  background-color: white;
  &:hover {
    background-color: #343434;
    color: white;
  }
`;

export default NumberList;
