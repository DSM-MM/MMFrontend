import { Page404 } from "../../assets";
import styled from "@emotion/styled";

const Image = styled.img`
  width: 600px;
  height: 500px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
`;

const NotFound = () => {
  return (
    <>
      <Wrapper>
        <Image src={Page404} alt="page404" />
      </Wrapper>
    </>
  );
};

export default NotFound;
