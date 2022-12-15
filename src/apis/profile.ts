import axios from "axios";

export interface ProfileType {
  id: number;
  projects: ProjectType[];
  nickName: string;
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
}

export const getProfile = async () => {
  const Authorization: string | null =
    window.localStorage.getItem("access_token");
  if (!Authorization) return;
  const response = await axios.get<ProfileType>(
    `${process.env.REACT_APP_BASE_URL}/mypage`,
    {
      headers: {
        Authorization: Authorization,
      },
    }
  );
  return response;
};
