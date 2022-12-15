import instance from "./axios";

export const getMentors = async () => {
  const response = await instance.get("/mentor/list");
  return response;
};
