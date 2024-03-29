import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getMentors } from "../../../apis/getMentor";
import Card from "../card";

interface MentorType {
  id: number;
  name: string;
  major: string;
  email: string;
  introduction: string;
  language: string;
  rating: number;
  jobGroup: string;
}

interface PropsType {
  state: number;
}

const CardList = ({ state }: PropsType) => {
  const [mentors, setMentors] = useState<MentorType[]>();
  useEffect(() => {
    getMentors()
      .then((res) => {
        console.log(res);
        setMentors(res.data);
      })
      .catch((err) => console.error(err));
  }, [state]);
  return (
    <CardListWrapper>
      {mentors?.map((element: MentorType) => (
        <Card
          key={element.id}
          id={element.id}
          job={element.major}
          name={element.name}
          introduce={element.introduction}
          gpa={element.rating}
        />
      ))}
    </CardListWrapper>
  );
};

const CardListWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
`;

export default CardList;
