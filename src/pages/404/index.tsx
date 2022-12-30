import { Page404 } from "../../assets";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();
  const goBackPage = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    nav(-1);
  };
  return (
    <_Wrapper>
      <_Image src={Page404} alt="page404" />
      <_Text onClick={goBackPage}>뒤로 가기</_Text>
    </_Wrapper>
  );
};

const _Image = styled.img`
  width: 50vw;
  height: 50vh;
`;

const _Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
`;

const _Text = styled.span`
  cursor: pointer;
`;

export default NotFound;
