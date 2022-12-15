import instance from "./axios";

export interface GetMentoType {
  id: number;
  name: string;
  major: string;
  email: string;
  introduction: string;
  language: string;
  rating: number;
  jobGroup: string;
}

export const getMento = async (id: string) => {
  const response = await instance.get<GetMentoType>(`/mentor/${id}`);
  return response;
};
