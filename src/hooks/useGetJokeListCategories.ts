import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { axiosJokeIntance } from 'core/axios/axiosIntance';
import { APIError, APIResponse } from 'interfaces/IResponseApi';
import { IResponseApiJokeListCategories } from 'interfaces/IResponseJokeListCategories';

const GetJokeListCategories = async () => {
  const { data } = await axiosJokeIntance.get('/categories');
  return data;
};

export const useGetJokeListCategories = ({options, isFocused}: {isFocused: boolean; options?: UseQueryOptions<IResponseApiJokeListCategories, APIError>}) => {
  return useQuery({
    queryKey: ['getListCategories'],
    queryFn: () => GetJokeListCategories(),
    subscribed: isFocused,
    ...options,
  });
};
