import { InformationCard } from "../../constance/fieldlist";
import Header from "../common/header";
import TopList from "./toplist";
import Information from "./information";
import * as S from "./styles";
import { Link } from "react-router-dom";

interface Type {
  title: string;
  maker: string;
  time: string;
  tag: string[];
}

const FindProject = () => {
  return (
    <>
      <S.Flex>
        <Header />
        <S.Wrapper>
          <TopList />
          <S.ListWrapper>
            {InformationCard.map((value: Type, index: number) => (
              <Link to={`/find/${index}`}>
                <Information
                  key={index}
                  title={value.title}
                  maker={value.maker}
                  time={value.time}
                  tag={value.tag}
                />
              </Link>
            ))}
          </S.ListWrapper>
        </S.Wrapper>
      </S.Flex>
    </>
  );
};

export default FindProject;
