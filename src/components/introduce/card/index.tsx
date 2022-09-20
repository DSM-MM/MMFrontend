import * as S from "./styles";
import { Data } from "../../../constance/introduce";

interface Props {
  job: string | undefined;
  name: string | undefined;
}

const MentoCard = ({ job, name }: Props) => {
  return (
    <>
      <S.Card>
        <S.SideBar>
          <S.GrayBar style={{ borderRadius: "5px 0 0 0" }} />
          <S.BlackBar style={{ borderRadius: "0 0 0 5px" }} />
        </S.SideBar>
        <S.ColumnWrapper>
          <S.Wrapper>
            <S.ColumnWrapper>
              <S.Name>{name}</S.Name>
              <S.Job>
                {job} {job !== "Design" ? "Developer" : ""}
              </S.Job>
            </S.ColumnWrapper>
          </S.Wrapper>
          <S.WrapperReverse>
            <S.ColumnWrapper>
              <S.Text>Email: {Data.email}</S.Text>
              <S.Text>Introduce: {Data.introduce}</S.Text>
              <S.Text>Language: {Data.Language}</S.Text>
              <S.Text>평점: {Data.gpa}</S.Text>
            </S.ColumnWrapper>
          </S.WrapperReverse>
        </S.ColumnWrapper>
        <S.SideBarReverse>
          <S.GrayBar style={{ borderRadius: "0 0 5px 0" }} />
          <S.BlackBar style={{ borderRadius: "0 5px 0 0" }} />
        </S.SideBarReverse>
      </S.Card>
    </>
  );
};

export default MentoCard;
