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
  margin: 3vh 0 20px 0;
`;

export const TopListBackground = styled.button<WidthProps>`
  width: ${(props: { width: number }) => `${props.width}rem`};
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  margin-right: 50px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #343434;
    color: #ffffff;
  }
  &:active {
    background-color: #343434;
  }
`;

export const SelectedContentWrapper = styled.div`
  display: flex;
`;

export const ListWrapper = styled.div`
  width: 70%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
`;
