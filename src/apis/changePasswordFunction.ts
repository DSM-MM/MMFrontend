import instance from "./axios";

export interface PasswordType {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  newPasswordValid: string;
  introduction: string;
  jobGroup: string;
  language: string;
  githubLink: string;
}

export const changePasswordFunction = async (data: PasswordType) => {
  const response = await instance.patch<PasswordType>("/mypage/password", data);
  return response;
};
