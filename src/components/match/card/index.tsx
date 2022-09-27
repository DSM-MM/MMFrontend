import { Link } from "react-router-dom";
import { ProfileLogo } from "../../../assets/index";
import * as S from "./styles"

interface PropsType {
  job: string;
  name: string;
  introduce: string;
  gpa: number;
  index: number;
}

const Card = ({ job, name, introduce, gpa, index }: PropsType) => (
  <>
    <Link to={`/mento/${job}/${name}`}>
      <S.CardBackground index={index}>
        <S.Job>{job}</S.Job>
        <S.Profile>
          <img src={ProfileLogo} alt="ProfileLogo" />
        </S.Profile>
        <S.Text>{name}</S.Text>
        <S.Text>"{introduce}"</S.Text>
        <S.GpaText>평점: {gpa}</S.GpaText>
      </S.CardBackground>
    </Link>
  </>
);

export default Card;
