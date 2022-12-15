import instance from "./axios";

export interface GetProjectType {
  id: number;
  user: number;
  title: string;
  period: string;
  content: string;
  needed: string;
  preference: string;
}

export const getProject = async (id: string) => {
  const response = await instance.get<GetProjectType>(`/project/${id}`);
  return response;
};
