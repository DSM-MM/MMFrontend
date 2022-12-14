import instance from "./axios";

export const createProject = async (
  title: string,
  hash: string[],
  input: string
) => {
  await instance.post("/project", {
    title: "titleex",
    period: "2022-7-12 ~ 2022-x-xx",
    content: "contentex",
    needed: "Frotend",
    preference: "preferenceex",
  });
};
