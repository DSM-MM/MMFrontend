import instance from "./axios";

export const createProject = async (
  title: string,
  hash: string,
  input: string
) => {
  await instance.post("/project", {
    title: title,
    period: "프로젝트 안에 기재되어있습니다",
    content: input,
    needed: hash,
    preference: "",
  });
};
