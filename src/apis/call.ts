import instance from "./axios";

export const callProject = async () => {
  const response = await instance.get("/project/list");
  return response;
};
