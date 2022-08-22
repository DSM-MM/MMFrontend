import styled from "@emotion/styled";

type WidthProps = {
  width: number;
};

export const MentoTitle = styled.span`
  padding: 5vh 0 0 20vw;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
`;

export const FieldWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-left: 17vw;
  margin-top: 3vh;
`;

export const TopListBackground = styled.div<WidthProps>`
  width: ${(props) => `${props.width}rem`};
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #343434;
    color: #ffffff;
  }
`;
