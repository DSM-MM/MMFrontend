import instance from "./axios";

export interface ProfileType {
  id: number;
  projects: ProjectType[];
  name: string;
  email: string;
  password: string;
  introduction: string;
  jobGroup: string;
  language: string;
  githubLink: string;
  provider: string;
  providerId: string;
  role: string;
}

export interface ProjectType {
  id: number;
  user: string;
  title: string;
  period: string;
  content: string;
  needed: string;
  preference: string;
  images: {
    id: number;
    project: string;
    imageUrl: string;
  }[];
}

export const profile = async () => {
  const ACCESS_TOKEN: string | null =
    window.localStorage.getItem("access_token");
  if (!ACCESS_TOKEN) return;
  const response = await instance.get<ProfileType>(`/mypage`, {
    headers: {
      ACCESS_TOKEN: ACCESS_TOKEN,
    },
  });
  return response;
};
