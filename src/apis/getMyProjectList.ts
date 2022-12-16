import instance from "./axios";

export interface MyProjectType {
  projects: {
    title: string;
    id: number;
    userId: number;
    preference: string;
  }[];
}

export const getMyProjectList = async () => {
  const response = await instance.get<MyProjectType>("/mypage/project/list");
  return response;
};
