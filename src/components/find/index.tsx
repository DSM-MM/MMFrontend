import { InformationCard } from "../../constance/fieldlist";
import Header from "../common/header";
import TopList from "./toplist";
import Information from "./information";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { callProject } from "../../apis/call";
import { AxiosError, AxiosResponse } from "axios";

interface ListType {
  id: number;
  user: number;
  title: string;
  period: string;
  content: string;
  needed: string;
  preference: string;
}

const FindProject = () => {
  const [list, setList] = useState<ListType[]>();
  useEffect(() => {
    callProject()
      .then((res: AxiosResponse<any, any>) => {
        setList(res.data);
      })
      .catch((err: AxiosError) => console.error(err));
  }, []);
  return (
    <S.Flex>
      <Header />
      <S.Wrapper>
        <TopList />
        <S.ListWrapper>
          {list?.map((element: ListType) => (
            <Link to={`/find/${element.id}`} key={element.id}>
              <Information
                title={element.title}
                time={element.period}
                tag={element.needed}
              />
            </Link>
          ))}
        </S.ListWrapper>
      </S.Wrapper>
    </S.Flex>
  );
};

export default FindProject;
