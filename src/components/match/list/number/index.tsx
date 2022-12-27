import styled from "@emotion/styled";

interface PropsType {
  list: string[];
}

const NumberList: React.FC<PropsType> = ({ list }: PropsType) => (
  <_Wrapper>
    {list.map((value: string, index: number) => (
      <Btn key={index}>
        <span>{value}</span>
      </Btn>
    ))}
  </_Wrapper>
);

const _Wrapper = styled.div`
  width: 100%;
`;

const Btn = styled.button`
  margin-right: 30px;
  width: max-content;
  height: 40px;
  border-radius: 1rem;
  padding: 5px 20px;
  background-color: white;
  &:hover {
    background-color: #343434;
    color: white;
  }
`;

export default NumberList;
