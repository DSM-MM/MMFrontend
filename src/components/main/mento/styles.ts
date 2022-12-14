import styled from "@emotion/styled";

export const Title = styled.span`
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 2%;
`;

export const MentoWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5%;
`;

export const CardWrapper = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: space-around;
`;

export const Card = styled.div`
  width: 20%;
  height: 300px;
  background-color: #343434;
  color: #ffffff;
  border-radius: 5%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @keyframes sizeup {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
  @keyframes sizedown {
    0% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: sizedown 0.4s;
  :hover {
    animation: sizeup 0.4s;
    animation-fill-mode: forwards;
  }
`;

export const CardText = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;

export const GPA = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
`;

export const ProfileCircle = styled.div`
  width: 100px;
  height: 100px;
  background: #e5e5e5;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
