import { useParams } from "react-router";
import Header from "../common/header";
import * as S from "./styles";

const Introduce: React.FC = () => {
  const { job, name } = useParams();
  console.log(job, name);
  return (
    <>
      <div style={{ display: "flex" }}>
        <Header />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <S.IntroduceText>멘토 소개</S.IntroduceText>
        </div>
      </div>
    </>
  );
};

export default Introduce;
