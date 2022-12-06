import axios from "axios";

export interface LoginType {
  email: string;
  password: string;
}

export const login = async (value: LoginType) => {
  const response = await axios.post(
    `http://${process.env.REACT_APP_BASE_URL}/login`,
    value
  );
  return response;
};
