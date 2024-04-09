import axios from "axios";

const BASE_URL = import.meta.env.BASE_URL;

export const instance = () => {
  const instance = axios.create({
    baseURL: BASE_URL + "api/v1/",
    timeout: 5000,
  });

  // request interceptor
  axios.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // response interceptor
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return instance;
};
