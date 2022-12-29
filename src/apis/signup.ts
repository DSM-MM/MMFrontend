import axios from "axios";

export interface SignUpType {
  name: string;
  email: string;
  password: string;
  introduce: string;
  jobGroup: string;
}

export const signup = async (
  name: string,
  email: string,
  password: string,
  introduce: string,
  jobGroup: string
) => {
  await axios.post<SignUpType>(`${process.env.REACT_APP_BASE_URL}/signup`, {
    name: name,
    email: email,
    password: password,
    introduction: introduce,
    jobGroup: jobGroup,
  });
};
