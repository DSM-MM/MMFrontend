import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("access_token");
    accessToken &&
      (config.headers = { Authorization: `Bearer ${accessToken}` });
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default instance;
