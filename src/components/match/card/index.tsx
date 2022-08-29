import styled from "@emotion/styled";
import { ProfileLogo } from "../../../assets/index";

interface PropsType {
  job: string;
  name: string;
  introduce: string;
  Gpa: number;
}

const Card = ({ job, name, introduce, Gpa }: PropsType) => {
  return (
    <>
      <CardBackground>
        <Job>{job}</Job>
        <Profile>
          <img src={ProfileLogo} alt="ProfileLogo" />
        </Profile>
        <Text>{name}</Text>
        <Text>"{introduce}"</Text>
        <GpaText>평점: {Gpa}</GpaText>
      </CardBackground>
    </>
  );
};

const CardBackground = styled.div`
  width: 200px;
  height: 300px;
  background-color: #343434;
  border-radius: 1rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Job = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  margin-top: 5vh;
`;

const Profile = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fdfdfd;
  border-radius: 50px;
  background-color: rgba(128, 128, 128, 1);
  display: grid;
  place-content: center;
  margin-top: 10px;
`;

const Text = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  margin-top: 10px;
`;

const GpaText = styled.span`
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  margin-top: 20px;
`;

export default Card;
