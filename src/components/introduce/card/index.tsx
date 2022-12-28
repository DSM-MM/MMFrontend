import * as S from "./styles";
import { Data } from "../../../constance/introduce";
import { useEffect, useState } from "react";
import { getMento, GetMentoType } from "../../../apis/getMento";

interface PropsType {
  id: string | undefined;
}

const MentoCard = ({ id }: PropsType) => {
  const [user, setUser] = useState<GetMentoType>();
  useEffect(() => {
    if (id) {
      getMento(id)
        .then((res) => setUser(res.data))
        .catch((err) => console.error(err));
    }
  }, []);
  return (
    <S.Card>
      <S.SideBar>
        <S.GrayBar style={{ borderRadius: "5px 0 0 0" }} />
        <S.BlackBar style={{ borderRadius: "0 0 0 5px" }} />
      </S.SideBar>
      <S.ColumnWrapper>
        <S.Wrapper>
          <S.ColumnWrapper>
            <S.Name>{user?.name}</S.Name>
            <S.Job>
              {user?.major} {user?.major !== "Design" ? "Developer" : ""}
            </S.Job>
          </S.ColumnWrapper>
        </S.Wrapper>
        <S.WrapperReverse>
          <S.ColumnWrapper>
            <S.Text>Email: {user?.email}</S.Text>
            <S.Text>Introduce: {user?.introduction}</S.Text>
            <S.Text>Language: {user?.language}</S.Text>
            <S.Text>평점: {user?.rating.toFixed(2)}</S.Text>
          </S.ColumnWrapper>
        </S.WrapperReverse>
      </S.ColumnWrapper>
      <S.SideBarReverse>
        <S.GrayBar style={{ borderRadius: "0 0 5px 0" }} />
        <S.BlackBar style={{ borderRadius: "0 5px 0 0" }} />
      </S.SideBarReverse>
    </S.Card>
  );
};

export default MentoCard;
