import instance from "./axios";

export interface MentoType {
  name: string;
  major: string;
  email: string;
  introduction: string;
  language: string;
  jobGroup: string;
}

export const createMento = async (mento: MentoType) => {
  const response = await instance.post("/mentor", mento);
  return response;
};
