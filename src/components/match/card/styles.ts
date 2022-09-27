import styled from "@emotion/styled";

interface CardBackgroundProps {
    index: number;
  }
  
export const CardBackground = styled.div<CardBackgroundProps>`
    width: 200px;
    height: 300px;
    background-color: #343434;
    border-radius: 1rem;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
    margin-right: ${props => (props.index+1)%4 ? "30px" : 0};
    margin-bottom: 30px;
    cursor: pointer;
`;
  
export const Job = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    margin-top: 5vh;
`;
  
export const Profile = styled.div`
    width: 100px;
    height: 100px;
    background-color: #fdfdfd;
    border-radius: 50px;
    background-color: rgba(128, 128, 128, 1);
    display: grid;
    place-content: center;
    margin-top: 10px;
`;
  
export const Text = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    margin-top: 10px;
`;
  
export const GpaText = styled.span`
    font-weight: 700;
    font-size: 10px;
    line-height: 14px;
    margin-top: 20px;
`;