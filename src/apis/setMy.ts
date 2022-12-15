import instance from "./axios";

export interface MyType {
  email: string;
  introduction: string;
  jobGroup: string;
  language: string;
  githubLink: string;
}

export const setMy = async (data: MyType) => {
  const response = await instance.patch("/mypage/set", data);
  return response;
};
