import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ProfileLogo } from "../../../assets/index";

interface PropsType {
  id: number;
  job: string;
  name: string;
  introduce: string;
  gpa: number;
}

const Card = ({ id, job, name, introduce, gpa }: PropsType) => (
  <Link to={`/mento/${id}`}>
    <CardBackground>
      <Job>{job}</Job>
      <Profile>
        <img src={ProfileLogo} alt="ProfileLogo" />
      </Profile>
      <Text>{name}</Text>
      <Text>"{introduce}"</Text>
      <GpaText>평점: {gpa.toFixed(2)}</GpaText>
    </CardBackground>
  </Link>
);

const CardBackground = styled.div`
  width: 180px;
  height: 300px;
  background-color: #343434;
  border-radius: 1rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  word-wrap: break-word;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  @keyframes sizeup {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
  @keyframes sizedown {
    0% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: sizedown 0.4s;
  :hover {
    animation: sizeup 0.4s;
    animation-fill-mode: forwards;
  }
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
