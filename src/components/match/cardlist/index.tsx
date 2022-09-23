import styled from "@emotion/styled";
import { CardInformation } from "../../../constance/card";
import Card from "../card";

interface PropsType {
  job: string;
  name: string;
  introduce: string;
  gpa: number;
}

const CardList = () => {
  return (
    <>
      <CardListWrapper>
        {CardInformation?.map((v: PropsType, i: number) => (
          <Card
            key={i}
            job={v.job}
            name={v.name}
            introduce={v.introduce}
            gpa={v.gpa}
          />
        ))}
      </CardListWrapper>
    </>
  );
};

const CardListWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default CardList;
