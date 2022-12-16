import instance from "./axios";

export interface TopThreeType {
  id: number;
  name: string;
  major: string;
  email: string;
  introduction: string;
  language: string;
  rating: number;
  jobGroup: string;
}

export const getTopThree = async () => {
  const response = await instance.get<TopThreeType[]>("/mentor/top3");
  return response;
};
