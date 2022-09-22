import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';

const BACKEND_URL = 'https://camera-shop.accelerator.pages.academy';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => config,
  );
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      throw error;
    }
  );
  return api;
};
