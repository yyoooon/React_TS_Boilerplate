import axios, { AxiosInstance } from 'axios';

const convertErrorResponse = (error: any) => {
  return {
    status: error.response.status,
    message: error.message,
    data: error.response.data,
  };
};

const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    config => config,
    error => Promise.reject(convertErrorResponse(error)),
  );

  instance.interceptors.response.use(
    response => response,
    error => Promise.reject(convertErrorResponse(error)),
  );
  return instance;
};

const createInstance = () => {
  const instance = axios.create({
    baseURL: `http://localhost:8080/`,
    timeout: 15000,
  });
  return setInterceptors(instance);
};

export const request = createInstance();
