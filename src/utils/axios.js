import axios from "axios";

import { apiUrl, getToken } from "./helper";

console.log("apiUrl", apiUrl);
const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const tmpConfig = config;
    tmpConfig.headers.Authorization = `Bearer ${getToken()}`;
    return tmpConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
