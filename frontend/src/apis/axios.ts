import axios from "axios";

const BASE_URL = import.meta.env.BASE_URL;

export const instance = () => {
  const instance = axios.create({
    baseURL: BASE_URL + "/api",
    timeout: 5000,
  });

  // request interceptor
  axios.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  // response interceptor
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    },
  );
  return instance;
};
