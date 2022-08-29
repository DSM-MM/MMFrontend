import styled from "@emotion/styled";

type WidthProps = {
  width: number;
};

export const MentoTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
`;

export const FieldWrapper = styled.div`
  width: 70%;
  display: flex;
  margin-top: 3vh;
`;

export const TopListBackground = styled.div<WidthProps>`
  width: ${(props) => `${props.width}rem`};
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  margin-right: 50px;
  cursor: pointer;
  &:hover {
    background-color: #343434;
    color: #ffffff;
  }
`;