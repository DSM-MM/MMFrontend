import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: grid;
  place-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const ModalItem = styled.form`
  width: 550px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.color.white002};
  z-index: 3;
  border-radius: 20px;
`;

export const MainLogo = styled.img`
  width: 154.76px;
`;

export const InformationBlock = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const InputWrapper = styled.div`
  width: 310px;
  height: 50px;
  background: #f3f3f3;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  & > input {
    width: 310px;
    background-color: transparent;
  }
`;

export const LoginListBottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: ${theme.color.gray005};
`;

export const SignUpText = styled(Text)`
  cursor: pointer;
`;

export const Button = styled.button`
  width: 120px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.color.maincolor};
  border-radius: 5px;
  color: ${theme.color.white000};
`;

export const InputFlexWrapper = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SignUpTitle = styled.span`
  font-weight: 600;
  font-size: 21px;
  line-height: 29px;
`;

export const JobWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  width: 80%;
  span {
    cursor: pointer;
  }
`;

export const CheckBox = styled.input`
  accent-color: ${theme.color.maincolor};
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #d9d9d9;
  border-radius: 50px;
  cursor: pointer;
  margin-right: 5px;
  label {
    font-weight: 400;
    font-size: 17px;
    line-height: 15px;
  }
`;

export const JobCheckWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px 15px 0;
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
`;

export const SignUpButton = styled.button`
  width: 200px;
  height: 40px;
  background: ${theme.color.maincolor};
  color: ${theme.color.white000};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoogleImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const GoogleLogin = styled.a`
  width: 350px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${theme.color.white002};
  border: 1px solid ${theme.color.gray000};
  border-radius: 10px;
  cursor: pointer;
`;
