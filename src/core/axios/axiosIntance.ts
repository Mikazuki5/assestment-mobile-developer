import axios, { AxiosError, AxiosInstance } from 'axios';
import Config from 'react-native-config';

export const axiosInterceptorResponseError = async ({
  error,
}: {
  error: AxiosError;
  instance: AxiosInstance;
}) => {
  const errorConfig = error.config;

  if (errorConfig) {axios.request(errorConfig);}

  return Promise.reject(error);
};
export const axiosJokeIntance = axios.create({baseURL: Config.BASE_URL});

axiosJokeIntance.interceptors.request.use();
axiosJokeIntance.interceptors.response.use(
  (response) => response,
  (error) =>
    axiosInterceptorResponseError({
      error,
      instance: axiosJokeIntance,
    })
);
