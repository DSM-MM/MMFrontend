import styled from "@emotion/styled";
import theme from "../../../styles/theme";

interface PropsType {
  job: string;
  list: string[];
}

const Field = ({ job, list }: PropsType) => {
  return (
    <>
      <Wrapper>
        <Text>{job} 사용 기술</Text>
        {list.map((e: string, i: number) => (
          <Tag key={i}>{e}</Tag>
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Text = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${theme.color.black000};
  margin-right: 10px;
`;

const Tag = styled.div`
  width: max-content;
  background-color: ${theme.color.maincolor};
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  color: ${theme.color.white000};
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
`;

export default Field;
