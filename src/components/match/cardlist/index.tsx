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

const CardList = () => {
  const [mentors, setMentors] = useState<MentorType[]>();
  useEffect(() => {
    getMentors()
      .then((res) => setMentors(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <CardListWrapper>
      {mentors?.map((element: MentorType) => (
        <Card
          key={element.id}
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
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default CardList;
