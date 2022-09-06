import { useParams } from "react-router";
import Header from "../common/header";
import * as S from "./styles";
import MentoCard from "./card";
import { Link } from "react-router-dom";

const Introduce: React.FC = () => {
  const { job, name } = useParams();
  return (
    <>
      <div style={{ display: "flex" }}>
        <Header />
        <S.IntroduceWrapper>
          <div style={{ width: "100%" }}>
            <div style={{ marginBottom: "20px" }}>
              <S.IntroduceText>멘토 소개</S.IntroduceText>
            </div>
            <MentoCard job={job} name={name} />
            <S.ButtonWrapper>
              <S.LinkButton>질문하러 가기</S.LinkButton>
              <Link to="/mento">
                <S.LinkButton>다른 멘토 찾기</S.LinkButton>
              </Link>
            </S.ButtonWrapper>
          </div>
        </S.IntroduceWrapper>
      </div>
    </>
  );
};

export default Introduce;
