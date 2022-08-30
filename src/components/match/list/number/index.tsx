import styled from "@emotion/styled";

interface PropsType {
  arr: string[];
}

const NumberList: React.FC<PropsType> = ({ arr }: PropsType) => (
  <>
    {arr.map((value: string, index: number) => (
      <Btn>
        <span key={index}>{value}</span>
      </Btn>
    ))}
  </>
);

const Btn = styled.button`
  margin-right: 30px;
`;

export default NumberList;
