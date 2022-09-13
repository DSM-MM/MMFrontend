import { InformationCard } from "../../constance/fieldlist";
import Header from "../common/header";
import TopList from "./toplist";
import Information from "./information";
import * as S from "./styles";

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
              <Information
                key={index}
                title={value.title}
                maker={value.maker}
                time={value.time}
                tag={value.tag}
              />
            ))}
          </S.ListWrapper>
        </S.Wrapper>
      </S.Flex>
    </>
  );
};

export default FindProject;
